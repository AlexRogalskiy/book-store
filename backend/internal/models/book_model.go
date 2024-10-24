package models

import (
	"gorm.io/gorm"
	"time"
)

type Book struct {
	gorm.Model
	Title       string    `gorm:"type:varchar(255);not null"`
	Description string    `gorm:"type:text;not null"`
	Category    string    `gorm:"type:varchar(255);not null"`
	Trending    bool      `gorm:"not null"`
	CoverImage  string    `gorm:"type:varchar(255);not null"`
	OldPrice    float64   `gorm:"not null"`
	NewPrice    float64   `gorm:"not null"`
	CreatedAt   time.Time `gorm:"default:CURRENT_TIMESTAMP"`
}
