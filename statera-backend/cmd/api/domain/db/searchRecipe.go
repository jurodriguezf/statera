package db

import (
	"context"
	"fmt"
	"time"

	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
)

/*Search Recipe with query search a user on the database*/
func SearchRecipe(Query string) ([]model.Recipe, error) {
	ctx, cancel := context.WithTimeout(context.Background(), SearchTimeout*time.Second)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	condition := bson.M{
		"name": bson.M{"$regex": Query},
	}

	result, err := col.Find(ctx, condition)

	var recipes []model.Recipe

	for result.Next(ctx) {
		//Create a value into which the single document can be decoded
		var elem model.Recipe
		err := result.Decode(&elem)
		if err != nil {
			return recipes, err
		}

		recipes = append(recipes, elem)

	}

	if err != nil {
		fmt.Println("Record not found. " + err.Error())
		return recipes, err
	}

	return recipes, nil
}
