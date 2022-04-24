package db

import (
	"context"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"log"
	"time"
)

/*SearchProfile search a user on the database*/
func SearchProfile(ID string) (model.User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	db := MongoCN.Database("StateraDB")
	col := db.Collection("Users")

	var profile model.User
	objID, _ := primitive.ObjectIDFromHex(ID)

	condition := bson.M{
		"_id": objID,
	}

	err := col.FindOne(ctx, condition).Decode(&profile)
	profile.Password = ""
	if err != nil {
		log.Fatalln("Record Not Found " + err.Error())
		return profile, err
	}
	return profile, nil
}
