package db

import (
	"context"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

func LikeRecipe(ID primitive.ObjectID) (recipe model.Recipe, err error) {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Recipes")

	register := make(map[string]interface{})

	register["likes"] = recipe.
}
