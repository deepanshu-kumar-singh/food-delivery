import React, { useState, useEffect } from 'react';
import { getCustomers, getFoodItems, placeOrder } from '../api';

const PlaceOrder = () => {
    const [customers, setCustomers] = useState([]);
    const [foodItems, setFoodItems] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [selectedFood, setSelectedFood] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [customersResponse, foodItemsResponse] = await Promise.all([
                    getCustomers(),
                    getFoodItems(),
                ]);
                setCustomers(customersResponse.data);
                setFoodItems(foodItemsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedCustomer || !selectedFood) {
            alert('Please select a customer and a food item.');
            return;
        }
        try {
            await placeOrder(selectedCustomer, selectedFood, quantity);
            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Place Order</h2>
            <select onChange={(e) => setSelectedCustomer(e.target.value)} value={selectedCustomer}>
                <option value="">Select Customer</option>
                {customers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <select onChange={(e) => setSelectedFood(e.target.value)} value={selectedFood}>
                <option value="">Select Food</option>
                {foodItems.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
            </select>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
            />
            <button type="submit">Place Order</button>
        </form>
    );
};

export default PlaceOrder;
