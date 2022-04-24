package routers

import (
	"encoding/json"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"net/http"
)

/*ViewProfile allows to extract values of a user profile*/
func ViewProfile(writer http.ResponseWriter, request *http.Request) {

	ID := request.URL.Query().Get("id")
	if len(ID) < 1 {
		http.Error(writer, "You must send the parameter ID. ", http.StatusBadRequest)
		return
	}

	profile, err := db.SearchProfile(ID)
	if err != nil {
		http.Error(writer, "You must send the parameter ID. "+err.Error(), http.StatusBadRequest)
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(profile)
}
