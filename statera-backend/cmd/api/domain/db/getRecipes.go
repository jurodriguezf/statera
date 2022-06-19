package db

import (
	"context"
	"time"

	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
)

/*GetRecipes inserts user's data into DB, returns the id of the user inserted*/
func GetRecipes() ([]model.Recipe, bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), SearchTimeout*time.Second)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	condition := bson.M{}

	result, err := col.Find(ctx, condition)
	if err != nil {
		return []model.Recipe{}, false, err
	}
	var recipes []model.Recipe

	for result.Next(ctx) {
		//Create a value into which the single document can be decoded
		var elem model.Recipe
		err := result.Decode(&elem)
		if err != nil {
			return []model.Recipe{}, false, err
		}

		recipes = append(recipes, elem)

	}

	return recipes, true, nil
}
