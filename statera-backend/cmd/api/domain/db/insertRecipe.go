package db

import (
	"context"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

/*InsertRecipe inserts user's data into DB, returns the id of the user inserted*/
func InsertRecipe(recipe model.Recipe) (string, bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), SearchTimeout*time.Second)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	result, err := col.InsertOne(ctx, recipe)
	if err != nil {
		return "", false, err
	}

	ObjID := result.InsertedID.(primitive.ObjectID).Hex()
	return ObjID, true, nil
}
