package db

import (
	"context"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

func EditRecipeRating(recipe model.Recipe, ID primitive.ObjectID) (bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*15)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	register := make(map[string]interface{})

	register["rating"] = recipe.Rating
	register["sumOfRatings"] = recipe.SumOfRatings

	updateString := bson.M{
		"$set": register,
	}

	filter := bson.M{"_id": bson.M{"$eq": ID}}

	_, err := col.UpdateOne(ctx, filter, updateString)
	if err != nil {
		return false, err
	}
	return true, nil

}
