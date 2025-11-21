package com.foodhub.service;

import com.foodhub.entity.FoodItems;
import com.foodhub.repository.FoodItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodItemService {

    private final FoodItemRepository foodItemRepository;

    public FoodItemService(FoodItemRepository foodItemRepository){
        this.foodItemRepository=foodItemRepository;
    }

    public List<FoodItems> getAllFoodItem(){
        return foodItemRepository.findAll();
    }

    public FoodItems saveFoodItem(FoodItems foodItems){
        return foodItemRepository.save(foodItems);
    }
}
