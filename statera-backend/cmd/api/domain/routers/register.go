package routers

import (
	"encoding/json"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"net/http"
)

/*Register function that creates the register of the user into DB*/
func Register(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")
	var user model.User

	err := json.NewDecoder(request.Body).Decode(&user)
	if err != nil {
		http.Error(writer, "Data received incorrect "+err.Error(), 400)
		return
	}

	if len(user.Email) == 0 {
		http.Error(writer, "User's email is required "+err.Error(), 400)
		return
	}
	if len(user.Password) < 6 {
		http.Error(writer, "Password must be at least 6 characters long "+err.Error(), 400)
		return
	}

	_, found, _ := db.UserExists(user.Email)
	if found == true {
		http.Error(writer, "There’s already an existing user with that email "+err.Error(), 400)
		return
	}

	_, status, err := db.InsertUser(user)
	if err != nil {
		http.Error(writer, "There was an error registering the user "+err.Error(), 400)
		return
	}
	if status == false {
		http.Error(writer, "It was not possible to register the user ", 400)
		return
	}

	writer.WriteHeader(http.StatusCreated)
}
