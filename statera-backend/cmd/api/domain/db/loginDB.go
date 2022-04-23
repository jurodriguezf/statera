package db

import (
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"golang.org/x/crypto/bcrypt"
)

/*LoginDB checks if user exists and if passwords match*/
func LoginDB(email string, password string) (model.User, bool) {
	user, found, _ := UserExists(email)
	if found == false {
		return user, false
	}

	passwordBytes := []byte(password)
	passwordRegistered := []byte(user.Password)
	err := bcrypt.CompareHashAndPassword(passwordRegistered, passwordBytes)
	if err != nil {
		return user, false
	}

	return user, true
}
