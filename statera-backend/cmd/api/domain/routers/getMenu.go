package routers

import "net/http"

func GetMenu(writer http.ResponseWriter, request *http.Request) {

	writer.WriteHeader(http.StatusOK)
}
