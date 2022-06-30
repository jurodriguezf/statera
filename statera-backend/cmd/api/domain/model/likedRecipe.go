package model

type LikedRecipe struct {
	IDrecipe string `json:"recipe_id"`
	Token    string `json:"token,omitempty"`
}
