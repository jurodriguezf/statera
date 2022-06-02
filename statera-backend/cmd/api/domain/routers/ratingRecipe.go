package routers

import (
	"net/http"

	"encoding/json"

	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"github.com/jurodriguezf/statera/cmd/api/domain/model"
)

func RatingRecipe(writer http.ResponseWriter, request *http.Request) {

	var rating model.Rating

	err := json.NewDecoder(request.Body).Decode(&rating)
	if err != nil {
		boom.BadRequest(writer, "Wrong Data")
		return
	}

	_, err = db.RatingRecipe(rating, IDUserOBJ)
	if err != nil {
		http.Error(writer, "It is not possible rate this recipe"+err.Error(), 400)
		return
	}

	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusCreated)
	json.NewEncoder(writer).Encode(rating)
}
