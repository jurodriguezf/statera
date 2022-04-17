package service

import (
	"github.com/jurodriguezf/statera/cmd/api/domain/db"
	"net/http"
)

/*CheckConnectionDB allows to know the DB state before deploying an endpoint*/
func CheckConnectionDB(next http.HandlerFunc) http.HandlerFunc {
	return func(writter http.ResponseWriter, request *http.Request) {
		if db.CheckConnection() == 0 {
			http.Error(writter, "Connection with DB lost", 500)
			return
		}
		next.ServeHTTP(writter, request)
	}
}
