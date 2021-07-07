import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "ADD_TODO", payload: "add Todos" })}
      >
        Add Todos
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Todos;
