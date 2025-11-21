package com.foodhub.repository;

import com.foodhub.entity.FoodItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodItemRepository extends JpaRepository<FoodItems, Long> {
}
