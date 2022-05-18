package routers

import (
	"encoding/json"
	"fmt"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"io"
	"net/http"
	"os"
	"strings"
)

func UploadAvatar(writer http.ResponseWriter, request *http.Request) {
	file, handler, err := request.FormFile("avatar")
	var extension = strings.Split(handler.Filename, ".")[1]
	var fileAvatar string = "cmd/uploads/avatars/" + IDUser + "." + extension

	f, err := os.OpenFile(fileAvatar, os.O_WRONLY|os.O_CREATE, 0666)
	if err != nil {
		fmt.Println(err)
		boom.BadRequest(writer, "Error uploading the avatar!")
		return
	}

	_, err = io.Copy(f, file)
	if err != nil {
		boom.BadRequest(writer, "Error copying the avatar")
		return
	}

	var user model.User
	var status bool

	user.Avatar = IDUser + "." + extension
	status, err = db.EditProfile(user, IDUser)
	if err != nil || status == false {
		boom.BadRequest(writer, "Error storing avatar in DB")
		return
	}

	writer.Header().Set("Content-type", "application/json")
	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(model.MessageResponse{
		Status:  "success",
		Message: "Avatar UPLOADED successfully",
	})

}
