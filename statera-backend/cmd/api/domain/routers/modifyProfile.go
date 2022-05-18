package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"net/http"
)

func ModifyProfile(writer http.ResponseWriter, request *http.Request) {
	var user model.User
	var status bool

	err := json.NewDecoder(request.Body).Decode(&user)
	if err != nil {
		boom.BadRequest(writer, "Wrong Data")
		return
	}
	status, err = db.EditProfile(user, IDUser)
	if err != nil {
		boom.BadRequest(writer, "There was an error modifying the user's information")
		return
	}
	if status == false {
		boom.BadRequest(writer, "It was not possible to modify the user's information")
		return
	}

	writer.WriteHeader(http.StatusOK)

	json.NewEncoder(writer).Encode(model.MessageResponse{
		Status:  "success",
		Message: "User EDITED successfully",
	})
}
