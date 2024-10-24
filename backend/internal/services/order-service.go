package services

import (
	"github.com/manjurulhoque/book-store/backend/internal/models"
	"github.com/manjurulhoque/book-store/backend/internal/repositories"
)

type OrderService struct {
	orderRepo repositories.OrderRepository
}

func NewOrderService(repo repositories.OrderRepository) *OrderService {
	return &OrderService{orderRepo: repo}
}

func (s *OrderService) CreateOrder(order *models.Order) error {
	return s.orderRepo.CreateOrder(order)
}

func (s *OrderService) GetOrderById(id uint) (*models.Order, error) {
	return s.orderRepo.GetOrderById(id)
}

func (s *OrderService) GetAllOrders() ([]models.Order, error) {
	return s.orderRepo.GetAllOrders()
}

func (s *OrderService) UpdateOrder(order *models.Order) error {
	return s.orderRepo.UpdateOrder(order)
}

func (s *OrderService) DeleteOrder(id uint) error {
	return s.orderRepo.DeleteOrder(id)
}
