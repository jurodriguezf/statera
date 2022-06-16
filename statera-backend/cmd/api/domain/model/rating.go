package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/*Recipe is the model of recipe in MongoDB*/
type Rating struct {
	ID      primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Rate    float64            `bson:"rate,omitempty" json:"rate,omitempty"`
	Comment string             `bson:"comment,omitempty" json:"comment,omitempty"`
}
