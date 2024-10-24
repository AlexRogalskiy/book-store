package repositories

import (
	"github.com/manjurulhoque/book-store/backend/internal/models"
	"gorm.io/gorm"
)

type OrderRepository interface {
	CreateOrder(order *models.Order) error
	GetOrderById(id uint) (*models.Order, error)
	GetAllOrders() ([]models.Order, error)
	UpdateOrder(order *models.Order) error
	DeleteOrder(id uint) error
}

type orderRepository struct {
	db *gorm.DB
}

func NewOrderRepository(db *gorm.DB) OrderRepository {
	return &orderRepository{db}
}

func (r *orderRepository) CreateOrder(order *models.Order) error {
	return r.db.Create(order).Error
}

func (r *orderRepository) GetOrderById(id uint) (*models.Order, error) {
	var order models.Order
	err := r.db.Preload("Books").First(&order, id).Error
	return &order, err
}

func (r *orderRepository) GetAllOrders() ([]models.Order, error) {
	var orders []models.Order
	err := r.db.Preload("Books").Find(&orders).Error
	return orders, err
}

func (r *orderRepository) UpdateOrder(order *models.Order) error {
	return r.db.Save(order).Error
}

func (r *orderRepository) DeleteOrder(id uint) error {
	return r.db.Delete(&models.Order{}, id).Error
}