package server

import (
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

	router.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		writer.WriteHeader(http.StatusOK)
	}).Methods("GET")

	router.HandleFunc("/register", controller.CheckConnectionDB(routers.Register)).Methods("POST")
	router.HandleFunc("/login", controller.CheckConnectionDB(routers.Login)).Methods("POST")
	router.HandleFunc("/myaccount",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.ViewProfile))).Methods("GET")
	router.HandleFunc("/commentProfile",
		controller.CheckConnectionDB(routers.ViewCommentProfile)).Methods("GET")
	router.HandleFunc("/editaccount",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.ModifyProfile))).Methods("PUT")
	router.HandleFunc("/recipes/add-recipe",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.RegisterRecipe))).Methods("POST")
	router.HandleFunc("/recipes/all-recipes",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.GetRecipes))).Methods("GET")
	router.HandleFunc("/uploadAvatar",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.UploadAvatar))).Methods("POST")
	router.HandleFunc("/ratingRecipe",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.RatingRecipe))).Methods("PUT")
	router.HandleFunc("/getAvatar",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.GetAvatar))).Methods("GET")
	router.HandleFunc("/recipes/fav-recipes",
		controller.CheckConnectionDB(controller.ValidateJWT(routers.GetFavRecipes))).Methods("GET")
	router.HandleFunc("/recipes/recipe-query",
		controller.CheckConnectionDB(routers.GetRecipesQuery)).Methods("PUT")

	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./cmd/uploads/recipes"))))
	router.PathPrefix("/static2/").Handler(http.StripPrefix("/static2/", http.FileServer(http.Dir("./cmd/uploads/avatars"))))

	// checks if there is an environment variable called PORT. If not, it creates it
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8080"
	}

	log.Println("Listening at port " + PORT)

	// will be necessary when we want to deply the app in Heroku
	handler := cors.AllowAll().Handler(router)
	log.Fatal(http.ListenAndServeTLS(":"+PORT, "cert/www_stateraun_ml.crt", "cert/custom.key", handler))
	// http listens to port an sets it
	//log.Fatal(http.ListenAndServe(":"+PORT, handler))
}
