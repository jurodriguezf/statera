package db

import (
	"context"
	"fmt"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

/*GetRecipe search only one recipe on the database*/
func GetRecipe(ID primitive.ObjectID) (model.Recipe, error) {
	ctx, cancel := context.WithTimeout(context.Background(), SearchTimeout*time.Second)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	var recipe model.Recipe

	condition := bson.M{
		"_id": ID,
	}

	err := col.FindOne(ctx, condition).Decode(&recipe)
	if err != nil {
		fmt.Println("Record not found. " + err.Error())
		return recipe, err
	}
	return recipe, nil
}
