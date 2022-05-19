package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"net/http"

	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
)

// GetRecipes gets all recipes from DB*/
func GetRecipes(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")
	var recipes []model.Recipe

	recipes, status, err := db.GetRecipes()
	if err != nil {
		boom.BadRequest(writer, "There was an error getting the recipes")
		return
	}
	if status == false {
		boom.BadRequest(writer, "It was not possible to get recipes")
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusOK)
	json.NewEncoder(writer).Encode(recipes)
}
