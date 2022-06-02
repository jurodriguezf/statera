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

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")
	var recipeID = recipe.ID
	recipe.ID = actualUser

	_, err := col.UpdateByID(ctx, recipeID, bson.M{"$push": bson.M{"ratings": recipe}})

	if err != nil {
		return false, err
	}
	return true, nil

}
