package routers

import (
	"io"
	"net/http"
	"os"

	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
)

func GetAvatar(writer http.ResponseWriter, request *http.Request) {
	ID := request.URL.Query().Get("id")
	if len(ID) < 1 {
		boom.BadRequest(writer, "ID parammeter is needed")
		return
	}

	profile, err := db.SearchProfile(ID)
	if err != nil {
		boom.BadRequest(writer, "User not Found")
		return
	}

	OpenFile, err := os.Open("cmd/uploads/avatars" + profile.Avatar)
	if err != nil {
		boom.BadRequest(writer, "Avatar not found")
		return
	}

	_, err = io.Copy(writer, OpenFile)
	if err != nil {
		boom.BadRequest(writer, "Error copying the avatar")
	}
}
