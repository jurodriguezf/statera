package db

import (
	"context"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

func EditProfile(user model.User, ID string) (bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*15)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Users")

	register := make(map[string]interface{})
	if len(user.UserName) > 0 {
		register["userName"] = user.UserName
	}

	register["dateOfBirth"] = user.DoB

	if len(user.Avatar) > 0 {
		register["avatar"] = user.Avatar
	}
	if len(user.Location) > 0 {
		register["location"] = user.Location
	}

	if len(user.FavRecipes) > 0 {
		register["favRecipes"] = user.FavRecipes
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