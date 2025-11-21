package com.foodhub.dto;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OrderHistoryResponse {
    private Long orderId;
    private String customer;
    private String product;
    //private int quantity;
}
