package models

import (
	"gorm.io/gorm"
)

type Book struct {
	gorm.Model
	Title       string  `gorm:"type:varchar(255);not null"`
	Description string  `gorm:"type:text;not null"`
	Category    string  `gorm:"type:varchar(255);not null"`
	Trending    bool    `gorm:"not null"`
	CoverImage  string  `gorm:"type:varchar(255);not null"`
	OldPrice    float64 `gorm:"not null"`
	NewPrice    float64 `gorm:"not null"`

	Orders []Order `gorm:"many2many:order_books;"` // many-to-many relationship
}
