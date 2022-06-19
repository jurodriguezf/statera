package db

import (
	"context"
	"time"

	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
)

/*GetRecipeID inserts user's data into DB, returns the id of the user inserted*/
func GetRecipeID(id string) (model.Recipe, bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), SearchTimeout*time.Second)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	condition := bson.M{}

	result, err := col.Find(ctx, condition)
	if err != nil {
		return model.Recipe{}, false, err
	}
	var recipe model.Recipe

	err = result.Decode(&recipe)
	if err != nil {
		return model.Recipe{}, false, err
	}

	return recipe, true, nil
}
