package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"net/http"
)

/*RegisterRecipe function that creates the register of the recipe into DB*/
func RegisterRecipe(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")
	recipe := model.Recipe{
		Name:     request.FormValue("name"),
		Category: request.FormValue("category"),
	}

	ingredientsErr := json.Unmarshal([]byte(request.FormValue("ingredients")), &recipe.Ingredients)
	if ingredientsErr != nil {
		boom.BadRequest(writer, "Ingredient values are incorrect")
	}

	instructionsErr := json.Unmarshal([]byte(request.FormValue("ingredients")), &recipe.Instructions)
	if instructionsErr != nil {
		boom.BadRequest(writer, "Instruction values are incorrect")
	}

	ID, status, err := db.InsertRecipe(recipe)
	if err != nil {
		http.Error(writer, "There was an error registering the recipe "+err.Error(), 400)
		return
	}
	if status == false {
		http.Error(writer, "It was not possible to register the recipe ", 400)
		return
	}

	err = UploadImageRecipe(request, ID)
	if err != nil {
		boom.BadRequest(writer, "Error uploading image")
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(recipe)
}
