package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/manjurulhoque/book-store/backend/internal/services"
	"net/http"
)

type BookHandler struct {
	bookService *services.BookService
}

func NewBookHandler(bookService *services.BookService) *BookHandler {
	return &BookHandler{bookService: bookService}
}

func (h *BookHandler) GetBooks(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{})
}

func (h *BookHandler) CreateBook(c *gin.Context) {

	c.JSON(http.StatusCreated, gin.H{})
}
