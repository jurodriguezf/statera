package routers

import "net/http"

func LikeRecipe(writer http.ResponseWriter, request *http.Request) {

	writer.WriteHeader(http.StatusOK)
}
