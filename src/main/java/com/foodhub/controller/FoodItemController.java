package com.foodhub.controller;

import com.foodhub.entity.FoodItems;
import com.foodhub.service.FoodItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/food")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodItemController {

    private final FoodItemService foodItemService;

    public FoodItemController(FoodItemService foodItemService){
        this.foodItemService=foodItemService;
    }

    @GetMapping
    public List<FoodItems> getAllFoodItem(){
        return foodItemService.getAllFoodItem();
    }

    @PostMapping
    public FoodItems saveFoodItem(@RequestBody FoodItems foodItems){
        return foodItemService.saveFoodItem(foodItems);
    }
}
