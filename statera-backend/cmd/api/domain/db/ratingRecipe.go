package db

import (
	"context"
	"time"

	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
)

func RatingRecipe(recipe model.Rating, ID string) (bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*15)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	_, err := col.UpdateByID(ctx, ID, bson.M{"$push": bson.M{"ratings": bson.M{}}})

	if err != nil {
		return false, err
	}
	return true, nil

}
