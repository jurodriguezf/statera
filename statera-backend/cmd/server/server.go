package server

import (
	"github.com/gin-gonic/gin"
	"github.com/jurodriguezf/statera/cmd/api/domain/controller"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"
)

func SetupEndpoints() {
	router := gin.Default()

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, "pong")
	})

	router.GET("/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, "hi")
	})

	screenEndpoints := router.Group("/")
	{
		screenEndpoints.GET("/welcome", controller.HandleWelcomeScreen())
	}

	err := router.Run("localhost:8080")
	if err != nil {
		return
	}

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
