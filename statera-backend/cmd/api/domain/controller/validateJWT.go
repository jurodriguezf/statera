package controller

import (
	"github.com/jurodriguezf/statera/cmd/api/domain/routers"
	"net/http"
)

/*ValidateJWT allows to validate the JWT*/
func ValidateJWT(next http.HandlerFunc) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		_, _, _, err := routers.ProcessToken(request.Header.Get("Authorization"))
		if err != nil {
			http.Error(writer, "Wrong token!"+err.Error(), http.StatusBadRequest)
			return
		}

		next.ServeHTTP(writer, request)
	}
}
