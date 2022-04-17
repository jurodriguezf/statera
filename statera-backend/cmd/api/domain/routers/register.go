package routers

import (
	"encoding/json"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"net/http"
)

/*Register function that creates the register of the user into DB*/
func Register(writter http.ResponseWriter, request *http.Request) {
	var user model.User

	err := json.NewDecoder(request.Body).Decode(&user)
	if err != nil {
		http.Error(writter, "Data received incorrect"+err.Error(), 400)
		return
	}

	if len(user.Email) == 0 {
		http.Error(writter, "User email required"+err.Error(), 400)
		return
	}
	if len(user.Password) < 0 {
		http.Error(writter, "Password must be at least 6 characters"+err.Error(), 400)
		return
	}

	_, found, _ := db.UserExists(user.Email)
	if found == true {
		http.Error(writter, "Already exists an user registered with that email"+err.Error(), 400)
		return
	}

	_, status, err := db.InsertUser(user)
	if err != nil {
		http.Error(writter, "It was not posible to register user"+err.Error(), 400)
		return
	}
	if status == false {
		http.Error(writter, "Already exists an user registered with that email", 400)
		return
	}

	writter.WriteHeader(http.StatusCreated)
}