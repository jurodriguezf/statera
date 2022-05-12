package routers

import (
	"encoding/json"
	"net/http"

	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
)

/*RegisterRecipe function that creates the register of the recipe into DB*/
func GetRecipes(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")
	var recipes []model.Recipe

	recipes, status, err := db.GetRecipes()
	if err != nil {
		http.Error(writer, "There was an error registering the recipe "+err.Error(), 400)
		return
	}
	if status == false {
		http.Error(writer, "It was not possible to register the recipe ", 400)
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(recipes)
}
