package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/manjurulhoque/book-store/backend/internal/models"
	"github.com/manjurulhoque/book-store/backend/pkg/db"
	"log/slog"
)

func init() {
	err := godotenv.Load(".env")
	if err != nil {
		slog.Error("Error loading env file")
	}

	if err := db.DatabaseConnection(); err != nil {
		slog.Error("Error connecting to database", "error", err)
		panic(fmt.Sprintf("Error connecting to database: %v", err))
	}

	err = db.DB.AutoMigrate(&models.Book{}, &models.User{}, &models.Order{}, &models.OrderBook{})
	if err != nil {
		slog.Error("Error migrating database", "error", err.Error())
		panic(fmt.Sprintf("Error migrating database: %v", err))
	}
}

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
