import React, { useState, useEffect } from 'react';
import { getFoodItems } from '../api';

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                const response = await getFoodItems();
                setFoodItems(response.data);
            } catch (error) {
                console.error('Error fetching food items:', error);
            }
        };

        fetchFoodItems();
    }, []);

    return (
        <div>
            <h2>Food Items</h2>
            <ul>
                {foodItems.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default FoodItems;
