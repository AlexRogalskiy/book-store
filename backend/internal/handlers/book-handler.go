package handlers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/manjurulhoque/book-store/backend/internal/models"
	"github.com/manjurulhoque/book-store/backend/internal/services"
	"github.com/manjurulhoque/book-store/backend/pkg/db"
	"net/http"
	"path/filepath"
	"strconv"
)

type BookHandler struct {
	bookService *services.BookService
}

func NewBookHandler(bookService *services.BookService) *BookHandler {
	return &BookHandler{bookService: bookService}
}

func (h *BookHandler) GetBooks(c *gin.Context) {
	books, err := h.bookService.GetAllBooks()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error(), "status": false})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": books, "status": true})
}

func (h *BookHandler) CreateBook(c *gin.Context) {
	var book models.Book
	book.Title = c.PostForm("title")
	book.Description = c.PostForm("description")
	book.Category = c.PostForm("category")
	book.Trending = c.PostForm("trending") == "true"
	book.OldPrice, _ = strconv.ParseFloat(c.PostForm("oldPrice"), 64)
	book.NewPrice, _ = strconv.ParseFloat(c.PostForm("newPrice"), 64)

	// Handle file upload
	file, err := c.FormFile("coverImage")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cover image is required", "status": false})
		return
	}

	// Generate a unique file name using uuid and keep the original extension
	extension := filepath.Ext(file.Filename)                           // Get the file extension
	newFileName := fmt.Sprintf("%s%s", uuid.New().String(), extension) // Generate UUID and append the file extension

	// Define the path to save the file (e.g., "uploads/")
	filePath := filepath.Join("uploads", newFileName)
	if err := c.SaveUploadedFile(file, filePath); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error(), "status": false})
		return
	}

	// Set the file path to the CoverImage field
	book.CoverImage = filePath

	// Save the book to the database (assuming h.DB.Create is your ORM method)
	if err := db.DB.Create(&book).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error(), "status": false})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"status": true, "message": "Book created successfully", "book": book})
}
