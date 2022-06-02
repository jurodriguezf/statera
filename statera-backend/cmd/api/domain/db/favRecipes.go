package db

import (
	"context"
	"fmt"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"time"
)

func FavRecipes(ID string) ([]*model.Recipe, bool) {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	colRecipe := db.Collection("Recipes")

	var favrecipes []*model.Recipe

	user, err := SearchProfile(ID)
	if err != nil {
		fmt.Println("Record not found. " + err.Error())
		return favrecipes, false
	}

	Idrecipes := user.FavRecipes

	var objIdRecipes []primitive.ObjectID
	for _, rec := range Idrecipes {
		obj, _ := primitive.ObjectIDFromHex(rec)
		objIdRecipes = append(objIdRecipes, obj)
	}

	condition := bson.M{
		"_id": objIdRecipes,
	}

	opt := options.Find()

	cursor, err := colRecipe.Find(ctx, condition, opt)
	if err != nil {
		log.Fatal(err.Error())
		return favrecipes, false
	}

	for cursor.Next(context.TODO()) {
		var register model.Recipe

		err := cursor.Decode(&register)
		if err != nil {
			return favrecipes, false
		}
		favrecipes = append(favrecipes, &register)
	}

	return favrecipes, true
}
