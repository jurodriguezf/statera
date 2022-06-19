package db

import (
	"context"
	"time"

	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func RatingRecipe(recipe model.Rating, actualUser primitive.ObjectID) (bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*15)
	defer cancel()

	var recipeAux model.Recipe
	var ratingsArray *[]model.Rating
	var status bool

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")
	var recipeID = recipe.ID
	recipe.ID = actualUser

	_, err := col.UpdateByID(ctx, recipeID, bson.M{"$push": bson.M{"ratings": recipe}})

	recipeAux, err = GetRecipe(recipeID)

	recipeAux.SumOfRatings = recipeAux.SumOfRatings + recipe.Rate
	ratingsArray = recipeAux.Ratings
	recipeAux.Rating = recipeAux.SumOfRatings / float64(len(*ratingsArray))

	status, err = EditRecipeRating(recipeAux, recipeID)

	if err != nil || status == false {
		return false, err
	}
	return true, nil

}
