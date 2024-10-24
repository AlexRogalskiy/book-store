package main

import (
	"github.com/gin-gonic/gin"
	"log/slog"
)

func main() {
	// This is the main entry point for the application
	router := gin.Default()

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	err := router.Run()
	if err != nil {
		slog.Error("Failed to start the server", err)
		panic(err)
	}
}
