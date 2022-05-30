package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"github.com/jurodriguezf/statera/cmd/api/domain/service"
	"net/http"
)

/*Login is the function that tries to login a registered user*/
func Login(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")
	var user model.User

	err := json.NewDecoder(request.Body).Decode(&user)
	if err != nil {
		boom.BadRequest(writer, "Invalid email or password")
		return
	}

	if len(user.Email) == 0 {
		boom.BadRequest(writer, "Email is required")
		return
	}
	UserInDB, exists := db.LoginDB(user.Email, user.Password)
	if !exists {
		boom.Unathorized(writer, "Wrong email or password")
		return
	}

	jwtKey, err := service.GenerateJWT(UserInDB)
	if err != nil {
		boom.BadRequest(writer, "Error generating token")
		return
	}

	answer := model.LoginAnswer{
		Token: jwtKey,
	}

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
