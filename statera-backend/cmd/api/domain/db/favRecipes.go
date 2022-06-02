package db

import (
	"context"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"time"
)

func FavRecipes(ID string) ([]*model.Recipe, bool) {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	var recipes []*model.Recipe

	condition := bson.M{
		"_id": ID,
	}

	opt := options.Find()

	cursor, err := col.Find(ctx, condition, opt)
	if err != nil {
		log.Fatal(err.Error())
		return recipes, false
	}

	for cursor.Next(context.TODO()) {
		var register model.Recipe

		err := cursor.Decode(&register)
		if err != nil {
			return recipes, false
		}
		recipes = append(recipes, &register)
	}

	return recipes, true
}
