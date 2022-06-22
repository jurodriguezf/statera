package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/*Recipe is the model of recipe in MongoDB*/
type Recipe struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name         string             `bson:"name" json:"name,omitempty"`
	Category     string             `bson:"category" json:"category,omitempty"`
	Ingredients  []string           `bson:"ingredients" json:"ingredients,omitempty"`
	Instructions []string           `bson:"instructions" json:"instructions,omitempty"`
	ImageLink    string             `bson:"imageLink" json:"imageLink,omitempty"`
	Rating       float64            `bson:"rating,omitempty" json:"rating,omitempty"`
	SumOfRatings float64            `bson:"sumOfRatings,omitempty" json:"sumOfRatings,omitempty"`
	Ratings      *[]Rating          `bson:"ratings,omitempty" json:"ratings,omitempty"`
}
