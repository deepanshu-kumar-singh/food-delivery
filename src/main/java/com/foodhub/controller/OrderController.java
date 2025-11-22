package com.foodhub.controller;

import com.foodhub.dto.OrderHistoryResponse;
import com.foodhub.entity.Order;
import com.foodhub.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @PostMapping("/{customerId}/{foodId}/{qty}")
    public Order placeOrder(@PathVariable Long customerId,
                            @PathVariable Long foodId,
                            @PathVariable int qty) {
        return service.placeOrder(customerId, foodId, qty);
    }

    @GetMapping("/orders")
    public List<OrderHistoryResponse> getAllOrders() {
        return service.getAllOrders();
    }

}
