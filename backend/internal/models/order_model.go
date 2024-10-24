package models

import (
	"gorm.io/gorm"
)

type Address struct {
	City    string `gorm:"type:varchar(255);not null"`
	Country string `gorm:"type:varchar(255)"`
	State   string `gorm:"type:varchar(255)"`
	Zipcode string `gorm:"type:varchar(255)"`
}

type Order struct {
	gorm.Model
	Name       string  `gorm:"type:varchar(255);not null"`
	Email      string  `gorm:"type:varchar(255);not null"`
	Address    Address `gorm:"embedded"`
	Phone      string  `gorm:"type:varchar(20);not null"`
	TotalPrice float64 `gorm:"not null"`
	UserId     uint    `gorm:"not null"`

	Books []Book `gorm:"many2many:order_books;"` // many-to-many relationship
	User  User   `gorm:"foreignKey:UserId"`
}

func (o *Order) TableName() string {
	return "orders"
}

type OrderBook struct {
	OrderID uint
	BookID  uint
}

func (ob *OrderBook) TableName() string {
	return "order_books"
}
