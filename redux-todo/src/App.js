import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count is {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
      <h3>{isLogged ? "Welcome" : "Nooooo"} </h3>
    </div>
  );
}

export default App;
