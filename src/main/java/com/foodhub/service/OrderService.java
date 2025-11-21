package com.foodhub.service;

import com.foodhub.dto.OrderHistoryResponse;
import com.foodhub.entity.Customer;
import com.foodhub.entity.FoodItems;
import com.foodhub.entity.Order;
import com.foodhub.entity.OrderItem;
import com.foodhub.repository.CustomerRepository;
import com.foodhub.repository.FoodItemRepository;
import com.foodhub.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    private final CustomerRepository customerRepo;
    private final FoodItemRepository foodRepo;
    private final OrderRepository orderRepo;

    public OrderService(CustomerRepository customerRepo, FoodItemRepository foodRepo, OrderRepository orderRepo) {
        this.customerRepo = customerRepo;
        this.foodRepo = foodRepo;
        this.orderRepo = orderRepo;
    }

    public Order placeOrder(Long customerId, Long foodId, int qty) {

        Customer customer = customerRepo.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        FoodItems food = foodRepo.findById(foodId)
                .orElseThrow(() -> new RuntimeException("Food not found"));

        OrderItem item = new OrderItem();
        item.setFoodItems(food);
        item.setQuantity(qty);

        Order order = new Order();
        order.setCustomer(customer);
        order.setItems(java.util.List.of(item));

        order.setTotalAmount(food.getPrice() * qty);

        return orderRepo.save(order);

    }

    public List<OrderHistoryResponse> getAllOrders() {
        List<Order> orders = orderRepo.findAll();

        return orders.stream()
                .map(order -> new OrderHistoryResponse(
                        order.getId(),
                        order.getCustomer().getName(),
                        order.getItems().stream().map(OrderItem::getFoodItems).toList().toString()
                ))
                .collect(Collectors.toList());
    }

}
