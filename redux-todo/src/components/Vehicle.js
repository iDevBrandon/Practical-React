import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Vehicle = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div>
      <button onClick={() => dispatch({ type: "CAR" })}>Car</button>
      <h1>{counter.vehicle}</h1>
      <button onClick={() => dispatch({ type: "BIKE" })}>Bike</button>
    </div>
  );
};

export default Vehicle;
