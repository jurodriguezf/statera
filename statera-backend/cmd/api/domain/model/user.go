package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

/*User is the model of user in MongoDB*/
type User struct {
	ID         primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name       string             `bson:"name" json:"name,omitempty"`
	FamilyName string             `bson:"familyname" json:"familyName,omitempty"`
	DoB        time.Time          `bson:"dateofbirth" json:"dateOfBirth,omitempty"`
	Email      string             `bson:"email" json:"email"`
	Password   string             `bson:"password" json:"password,omitempty"`
	Avatar     string             `bson:"avatar" json:"avatar,omitempty"`
	Location   string             `bson:"location" json:"location,omitempty"`
}