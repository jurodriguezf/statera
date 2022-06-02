package routers

import (
	"net/http"

	"encoding/json"

	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
)

func RatingRecipe(writer http.ResponseWriter, request *http.Request) {
	ID := request.URL.Query().Get("id")

	if len(ID) < 1 {
		boom.BadRequest(writer, "ID parammeter is needed")
		return
	}

	var rating model.Rating

	err := json.NewDecoder(request.Body).Decode(&rating)
	if err != nil {
		boom.BadRequest(writer, "Wrong Data")
		return
	}

	_, err = db.RatingRecipe(rating, ID)
	if err != nil {
		http.Error(writer, "It is not possible rate this recipe"+err.Error(), 400)
		return
	}

}
