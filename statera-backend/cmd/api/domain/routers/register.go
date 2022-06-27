package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
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
		boom.BadRequest(writer, "User's email is required.")
		return
	}
	if len(user.Password) < 6 {
		boom.BadRequest(writer, "Password must be at least 6 characters long.")
		return
	}

	_, found, _ := db.UserExists(user.Email)
	if found {
		boom.BadRequest(writer, "There’s already an existing user with that email.")
		log.Fatal("User exists")
		return
	}

	_, status, err := db.InsertUser(user)
	if err != nil {
		boom.BadRequest(writer, "There was an error registering the user.")
		return
	}
	if status == false {
		boom.BadRequest(writer, "It was not possible to register the user.")
		return
	}

	// trying to implement captcha
	/*if err := service.CheckGoogleCaptcha(body.RecaptchaResponse); err != nil {
		boom.BadRequest(writer, "Unauthorized captcha")
		log.Fatal("unauthorized captcha")
		return
	}*/

	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(model.MessageResponse{
		Status:  "success",
		Message: "User created successfully",
	})
}
