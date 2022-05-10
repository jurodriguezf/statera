package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/*Recipe is the model of recipe in MongoDB*/
type Recipe struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name         string             `bson:"name" json:"name,omitempty"`
	Ingredients  []string           `bson:"ingredients" json:"ingredients,omitempty"`
	Instructions []string           `bson:"instructions" json:"instructions,omitempty"`
}