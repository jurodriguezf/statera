package controller

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func HandleWelcomeScreen() gin.HandlerFunc {
	return func(c *gin.Context) {
		// this answers to the request /welcome?name=Santiago or whatever name you like
		// if there's no name or if name is nil, it defaults to amigo

		name := c.DefaultQuery("name", "amigo")

		//we could probably use a service here to call an api/database/that kind of thing
		//dbData := mongoService.getUserInfo(name) or something

		c.JSON(http.StatusOK, gin.H{
			"code":    http.StatusOK,
			"message": fmt.Sprintf("Hola %s :)", name),
		})
	}
}
