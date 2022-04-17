package server

import (
	"github.com/gin-gonic/gin"
	"github.com/jurodriguezf/statera/cmd/api/domain/controller"
	"net/http"
)

func SetupEndpoints() {
	router := gin.Default()

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, "pong")
	})

	router.GET("/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, "hello")
	})

	screenEndpoints := router.Group("/")
	{
		screenEndpoints.GET("/welcome", controller.HandleWelcomeScreen())
	}

	err := router.Run("localhost:8080")
	if err != nil {
		return
	}
}
