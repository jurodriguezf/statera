package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"net/http"
)

func GetFavRecipes(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")

	ID := request.URL.Query().Get("id")
	if len(ID) < 1 {
		boom.BadRequest(writer, "ID parammeter is needed")
		return
	}
	var recipes []*model.Recipe

	recipes, status := db.FavRecipes(ID)

	if status == false {
		boom.BadRequest(writer, "It was not possible to get recipes")
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusOK)
	json.NewEncoder(writer).Encode(recipes)
}
