import React, { useState } from 'react';
import { addFoodItem } from '../api';

const AddFoodItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addFoodItem({ name, price });
            alert('Food item added successfully!');
            setName('');
            setPrice('');
        } catch (error) {
            console.error('Error adding food item:', error);
            alert('Failed to add food item.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Food Item</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Food Name"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
            />
            <button type="submit">Add Food Item</button>
        </form>
    );
};

export default AddFoodItem;
