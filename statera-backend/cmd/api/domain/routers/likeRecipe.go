package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"net/http"
)

func LikeRecipe(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Add("content-type", "application/json")

	var idRecipe string
	var recipe model.Recipe
	var likedRecipe model.LikedRecipe

	err := json.NewDecoder(request.Body).Decode(&likedRecipe)
	if err != nil {
		http.Error(writer, "Data received incorrect "+err.Error(), 400)
		return
	}

	idRecipe = likedRecipe.IDrecipe
	objID, err := primitive.ObjectIDFromHex(idRecipe)
	if err != nil {
		http.Error(writer, "Error string to objID "+err.Error(), 400)
		return
	}

	recipe, err = db.GetRecipe(objID)
	if err != nil {
		http.Error(writer, "Error Finding the recipe "+err.Error(), 400)
		return
	}

	newRecipe := model.Recipe{Likes: recipe.Likes + 1}

	status, err := db.EditRecipe(newRecipe, idRecipe)
	if err != nil {
		boom.BadRequest(writer, "There was an error modifying the user's information")
		return
	}
	if status == false {
		boom.BadRequest(writer, "It was not possible to modify the user's information")
		return
	}

	writer.WriteHeader(http.StatusOK)
	json.NewEncoder(writer).Encode(model.MessageResponse{
		Status:  "success",
		Message: "recipe EDITED successfully",
	})
}
