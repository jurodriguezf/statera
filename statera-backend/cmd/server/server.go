package server

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/jurodriguezf/statera/cmd/api/domain/controller"
	"github.com/jurodriguezf/statera/cmd/api/domain/routers"
	"github.com/rs/cors"
)

func SetupEndpoints() {
	router := mux.NewRouter()

	router.HandleFunc("/ping", func(writer http.ResponseWriter, request *http.Request) {
		writer.WriteHeader(http.StatusOK)
		json.NewEncoder(writer).Encode("pong")
	}).Methods("GET")

	router.HandleFunc("/register", controller.CheckConnectionDB(routers.Register)).Methods("POST")
	router.HandleFunc("/login", controller.CheckConnectionDB(routers.Login)).Methods("POST")
	router.HandleFunc("/myaccount",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.ViewProfile))).Methods("GET")
	router.HandleFunc("/recipes/get-recipe",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.RegisterRecipe))).Methods("POST")
	router.HandleFunc("/recipes/all-recipes",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.GetRecipes))).Methods("POST")

	// checks if there is an environment variable called PORT. If not, it creates it
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
	}

	log.Println("Listening at port " + PORT)

	// will be necessary when we want to deply the app in Heroku
	handler := cors.AllowAll().Handler(router)
	// http listens to port an sets it
	log.Fatal(http.ListenAndServe(":"+PORT, handler))
}
