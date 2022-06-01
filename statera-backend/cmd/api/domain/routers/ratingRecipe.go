package routers

import (
	"net/http"

	"github.com/darahayes/go-boom"
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
)

func RatingRecipe(writer http.ResponseWriter, request *http.Request) {
	ID := request.URL.Query().Get("id")

	if len(ID) < 1 {
		boom.BadRequest(writer, "ID parammeter is needed")
		return
	}

	db.RatingRecipe(recipe, ID)

	if find {
		return
	}

}
