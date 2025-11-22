import React from 'react';
import './App.css';
import FoodItems from './components/FoodItems';
import Customers from './components/Customers';
import OrderHistory from './components/OrderHistory';
import AddFoodItem from './components/AddFoodItem';
import AddCustomer from './components/AddCustomer';
import PlaceOrder from './components/PlaceOrder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Delivery</h1>
      </header>
      <main>
        <PlaceOrder />
        <hr />
        <AddFoodItem />
        <AddCustomer />
        <hr />
        <FoodItems />
        <Customers />
        <OrderHistory />
      </main>
    </div>
  );
}

export default App;
