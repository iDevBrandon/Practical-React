import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

// let store = createStore(reducer);

// store -> GLOBALIZED STATE

// ACTION-> describe what you wanna do
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// REDUCER -> Check what to do
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

// Display it in console
store.subscribe(() => console.log(store.getState()));

// DISPATCH -> Execute the action
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
