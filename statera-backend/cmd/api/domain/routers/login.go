package routers

import (
	"encoding/json"
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
		http.Error(writer, "Invalid username and/or password"+err.Error(), 400)
		return
	}

	if len(user.Email) == 0 {
		http.Error(writer, "User's email is required", 400)
		return
	}
	UserInDB, exists := db.LoginDB(user.Email, user.Password)
	if exists == false {
		http.Error(writer, "The user is not registered with that email and/or password", 400)
		return
	}

	jwtKey, err := service.GenerateJWT(UserInDB)
	if err != nil {
		http.Error(writer, "An error occurred generating the corresponding token"+err.Error(), 400)
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
