package routers

import (
	"encoding/json"
	"fmt"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"github.com/jurodriguezf/statera/cmd/api/domain/utils"
	"github.com/sirupsen/logrus"
	"log"
	"net/http"
)

/*Register function that creates the register of the user into DB*/
func Register(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")
	var user model.User

	err := json.NewDecoder(request.Body).Decode(&user)
	if err != nil {
		boom.BadRequest(writer, "Data received incorrect.")
		return
	}

	//trying to implement capthca
	/*var body model.RegisterRequest

	err = json.NewDecoder(request.Body).Decode(&body)
	if err != nil {
		boom.BadRequest(writer, "Data received incorrect.")
		log.Fatal("Data received incorrect. CAPTCHA")
		return
	}
	fmt.Println(body)*/

	if len(user.Email) == 0 {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedRegister}).Info(fmt.
			Sprintf("User's email is required"))
		boom.BadRequest(writer, "User's email is required.")
		return
	}
	if len(user.Password) < 6 {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedRegister}).Info(fmt.
			Sprintf("Password is not at least 6 characters long"))
		boom.BadRequest(writer, "Password must be at least 6 characters long.")
		return
	}

	_, found, _ := db.UserExists(user.Email)
	if found {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedRegister}).Info(fmt.
			Sprintf("User already exists"))
		boom.BadRequest(writer, "There’s already an existing user with that email.")
		log.Fatal("User exists")
		return
	}

	_, status, err := db.InsertUser(user)
	if err != nil {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedRegister}).Info(fmt.
			Sprintf("Error inserting user to db"))
		boom.BadRequest(writer, "There was an error registering the user.")
		return
	}
	if status == false {
		logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.FailedRegister}).Info(fmt.
			Sprintf("User was not registered into db"))
		boom.BadRequest(writer, "It was not possible to register the user.")
		return
	}

	// trying to implement captcha
	/*if err := service.CheckGoogleCaptcha(body.RecaptchaResponse); err != nil {
		boom.BadRequest(writer, "Unauthorized captcha")
		log.Fatal("unauthorized captcha")
		return
	}*/

	logrus.WithFields(logrus.Fields{"EventTYpe": utils.LoggingEvents.Register}).Info(fmt.Sprintf("User %s "+
		"is being registered", user.UserName))

	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(model.MessageResponse{
		Status:  "success",
		Message: "User created successfully",
	})
}
