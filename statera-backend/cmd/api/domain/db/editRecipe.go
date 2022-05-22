package db

import (
	"context"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

func EditRecipe(recipe model.Recipe, ID string) (bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*15)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	register := make(map[string]interface{})

	if len(recipe.ImageLink) > 0 {
		register["imageRecipe"] = recipe.ImageLink
	}

	updateString := bson.M{
		"$set": register,
	}

	objID, _ := primitive.ObjectIDFromHex(ID)
	filter := bson.M{"_id": bson.M{"$eq": objID}}

	_, err := col.UpdateOne(ctx, filter, updateString)
	if err != nil {
		return false, err
	}
	return true, nil

}
