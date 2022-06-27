package routers

import (
	"encoding/json"
	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
	"net/http"
	"strconv"
)

func GetMenu(writer http.ResponseWriter, request *http.Request) {
	ID := request.URL.Query().Get("id")

	if len(ID) < 1 {
		boom.BadRequest(writer, "ID parameter is needed")
		return
	}

	var query model.RecipeQuery
	recipeErr := json.NewDecoder(request.Body).Decode(&query)
	if recipeErr != nil {
		boom.BadRequest(writer, "Quantity not received")
	}

	quantity, _ := strconv.Atoi(query.Quantity)

	var favRecipes []*model.Recipe

	favRecipes, status := db.FavRecipes(ID)
	if status == false {
		boom.BadRequest(writer, "It was not possible to get recipes")
		return
	}

	var allRecipes []model.Recipe

	allRecipes, status, err := db.GetRecipes()
	if err != nil {
		boom.BadRequest(writer, "There was an error getting the recipes")
		return
	}
	if status == false {
		boom.BadRequest(writer, "It was not possible to get recipes")
		return
	}

	recommendedRecipes := []model.Recipe{}

	for _, generalRecipe := range allRecipes {
		for _, favRecipe := range favRecipes {
			if generalRecipe.Category == favRecipe.Category && generalRecipe.ID != favRecipe.ID && len(recommendedRecipes) < quantity {
				recommendedRecipes = append(recommendedRecipes, generalRecipe)
			}
		}

	}

	//fmt.Println(recommendedRecipes)

	json.NewEncoder(writer).Encode(recommendedRecipes)
}
