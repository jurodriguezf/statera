package server

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func SetupEndpoints() {
	router := gin.Default()

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, "pong")
	})

	err := router.Run("localhost:8080")
	if err != nil {
		return
	}
}
