import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getFoodItems = () => {
    return axios.get(`${API_URL}/food`);
};

export const addFoodItem = (foodItem) => {
    return axios.post(`${API_URL}/food`, foodItem);
};

export const getCustomers = () => {
    return axios.get(`${API_URL}/customer`);
};

export const addCustomer = (customer) => {
    return axios.post(`${API_URL}/customer`, customer);
};

export const placeOrder = (customerId, foodId, qty) => {
    return axios.post(`${API_URL}/order/${customerId}/${foodId}/${qty}`);
};

export const getOrderHistory = () => {
    return axios.get(`${API_URL}/order/orders`);
};
