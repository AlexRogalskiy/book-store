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
	TotalPrice float64 `json:"total_price" gorm:"column:total_price;not null"`
	UserId     uint    `json:"user_id" gorm:"column:user_id;not null"`

	Books []Book `gorm:"many2many:order_books;"` // many-to-many relationship
	User  User   `gorm:"foreignKey:user_id"`
}

func (o *Order) TableName() string {
	return "orders"
}

type OrderBook struct {
	BaseModel
	OrderID uint `json:"order_id" gorm:"column:order_id;not null"`
	BookID  uint `json:"book_id" gorm:"column:book_id;not null"`
}

func (ob *OrderBook) TableName() string {
	return "order_books"
}
