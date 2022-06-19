package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

/*User is the model of user in MongoDB*/
type User struct {
	ID         primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Name       string             `bson:"name" json:"name,omitempty"`
	UserName   string             `bson:"username" json:"userName,omitempty"`
	DoB        time.Time          `bson:"dateofbirth" json:"dateOfBirth,omitempty"`
	Email      string             `bson:"email" json:"email"`
	Password   string             `bson:"password" json:"password,omitempty"`
	Avatar     string             `bson:"avatar" json:"avatar,omitempty"`
	Location   string             `bson:"location" json:"location,omitempty"`
	FavRecipes []Recipe           `bson:"favrecipes" json:"favRecipes,omitempty"`
}

type ProfileResponse struct {
	UserName string    `bson:"username" json:"userName,omitempty"`
	DoB      time.Time `bson:"dateofbirth" json:"dateOfBirth,omitempty"`
	Email    string    `bson:"email" json:"email"`
	Location string    `bson:"location" json:"location,omitempty"`
}

type CommentProfileResponse struct {
	UserName string `bson:"username" json:"UserName,omitempty"`
	Avatar   string `bson:"avatar" json:"Avatar,omitempty"`
}
