package routers

import (
	"encoding/json"
	"net/http"
	"strings"

	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
)

/*RegisterRecipe function that creates the register of the recipe into DB*/
func RegisterRecipe(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")
	replacer := strings.NewReplacer("[", "", "]", "", "\"", "")
	var list *[]model.Rating

	recipe := model.Recipe{
		Name:         request.FormValue("name"),
		Category:     request.FormValue("category"),
		Ingredients:  strings.Split(replacer.Replace(request.FormValue("ingredients")), ","),
		Instructions: strings.Split(replacer.Replace(request.FormValue("instructions")), ","),
		Ratings:      list,
		Rating:       0,
		SumOfRatings: 0,
	}

	ID, status, err := db.InsertRecipe(recipe)
	if err != nil {
		boom.BadRequest(writer, "There was an error registering the recipe "+err.Error())
		return
	}
	if !status {
		boom.BadRequest(writer, "It was not possible to register the recipe ")
		return
	}

	err = UploadRecipeImage(request, ID)
	if err != nil {
		boom.BadRequest(writer, "Error uploading image")
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(recipe)
}
