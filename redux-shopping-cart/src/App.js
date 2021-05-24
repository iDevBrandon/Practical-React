import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of as state
// reducer - function that used to update store
import { createStore } from "redux";
import reducer from "./reducer";
// react-redux -
// Provider to wrap whole application and connect it in components
import { Provider } from "react-redux";

// initial store
const initialStore = {
  cart: cartItems,
  total: 10,
  amount: 5,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
