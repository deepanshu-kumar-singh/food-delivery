import React, { useState } from 'react';
import { addCustomer } from '../api';

const AddCustomer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCustomer({ name, email });
            alert('Customer added successfully!');
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error adding customer:', error);
            alert('Failed to add customer.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Customer</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Customer Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit">Add Customer</button>
        </form>
    );
};

export default AddCustomer;
