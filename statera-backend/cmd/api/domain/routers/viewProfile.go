package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"net/http"
)

/*ViewProfile allows to extract values of a user profile*/
func ViewProfile(writer http.ResponseWriter, request *http.Request) {

	token := request.Header.Get("Authorization")
	if token == "" {
		boom.BadRequest(writer, "There was an error with the token ")
		return
	}

	_, _, ID, _ := ProcessToken(token)
	if len(ID) < 1 {
		boom.BadRequest(writer, "You must send the parameter ID. ")
		return
	}

	profile, err := db.SearchProfile(ID)
	if err != nil {
		boom.BadRequest(writer, "You must send the parameter ID. "+err.Error())
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(profile)
}
