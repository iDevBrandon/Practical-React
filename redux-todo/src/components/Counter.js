import React from "react";
import { connect } from "react-redux";
import { Decrement, Increment } from "../actions/counter";
import store from "../store";

console.log(store.getState());

const unregister = store.subscribe(() =>
  console.log("State after dispatch:", store.getState())
);

const Counter = (props) => {
  const increment = () => {
    props.dispatch(Increment(1));
  };

  const decrement = () => {
    props.dispatch(Decrement(1));
    unregister();
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{props.count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
