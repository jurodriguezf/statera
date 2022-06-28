package routers

import (
	"encoding/json"
	"fmt"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"github.com/jurodriguezf/statera/cmd/api/domain/service"
	"github.com/jurodriguezf/statera/cmd/api/domain/utils"
	"github.com/sirupsen/logrus"
	"net/http"
)

/*Login is the function that tries to login a registered user*/
func Login(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")
	var user model.User

	err := json.NewDecoder(request.Body).Decode(&user)
	if err != nil {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedLogin}).Info(fmt.
			Sprintf("Invalid info received"))
		boom.BadRequest(writer, "Invalid email or password")
		return
	}

	if len(user.Email) == 0 {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedLogin}).Info(fmt.
			Sprintf("User did not insert the email"))
		boom.BadRequest(writer, "Email is required")
		return
	}
	UserInDB, exists := db.LoginDB(user.Email, user.Password)
	if !exists {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedLogin}).Info(fmt.
			Sprintf("User not registered with that email/password combination"))
		boom.Unathorized(writer, "Wrong email or password")
		return
	}

	jwtKey, err := service.GenerateJWT(UserInDB)
	if err != nil {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedLogin}).Info(fmt.
			Sprintf("Bad JWT token generation"))
		boom.BadRequest(writer, "Error generating token")
		return
	}

	answer := model.LoginAnswer{
		Token: jwtKey,
	}

	logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.Login}).Info(fmt.Sprintf("User %s "+
		"logging in", user.UserName))

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(answer)

	//this code is useful to set browser cookies
	/*expirationTime := time.Now().Add(24 * time.Hour)
	http.SetCookie(writer, &http.Cookie{
		Name: "token",
		Value : jwtKey,
		Expires: expirationTime,
	})*/
}
