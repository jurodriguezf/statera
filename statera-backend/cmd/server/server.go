package server

import (
	"github.com/gorilla/mux"
	"github.com/jurodriguezf/statera/cmd/api/domain/controller"
	"github.com/jurodriguezf/statera/cmd/api/domain/routers"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"
)

func SetupEndpoints() {
	router := mux.NewRouter()

	router.HandleFunc("/register", controller.CheckConnectionDB(routers.Register)).Methods("POST")
	router.HandleFunc("/login", controller.CheckConnectionDB(routers.Login)).Methods("POST")
	router.HandleFunc("/myaccount",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.ViewProfile))).Methods("GET")

	// checks if there is an environment variable called PORT. If not, it creates it
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
	}

	// will be necessary when we want to deply the app in Heroku
	handler := cors.AllowAll().Handler(router)
	// http listens to port an sets it
	log.Fatal(http.ListenAndServe(":"+PORT, handler))
}
