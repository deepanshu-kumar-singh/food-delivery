import React, { useState, useEffect } from 'react';
import { getOrderHistory } from '../api';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const response = await getOrderHistory();
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
        };

        fetchOrderHistory();
    }, []);

    return (
        <div>
            <h2>Order History</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.orderId}>
                        Order #{order.orderId} - {order.customerName} ordered {order.foodName} ({order.quantity})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
