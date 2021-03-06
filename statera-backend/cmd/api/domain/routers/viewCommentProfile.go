package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"net/http"
)

/*ViewCommentProfile allows extracting values of a user profile for a comment*/
func ViewCommentProfile(writer http.ResponseWriter, request *http.Request) {

	ID := request.Header.Get("Authorization")

	profile, err := db.SearchProfile(ID)
	if err != nil {
		boom.BadRequest(writer, "You must send the parameter ID. "+err.Error())
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(model.CommentProfileResponse{
		UserName: profile.UserName,
		Name:     profile.Name,
		Avatar:   profile.Avatar,
	})
}
