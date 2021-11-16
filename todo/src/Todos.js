import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/ducks/counter";
import { getUser } from "./redux/ducks/user";

const Todos = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // const counter = useSelector((state) => state.counter.count);

  //   const handleIncrement = () => {
  //     dispatch(increment());
  //   };

  //   const handleDecrement = () => {
  //     dispatch(decrement());
  //   };

  useEffect(() => {
    axios.get(`http://localhost:8081/users`).then((res) => {
      const response = res.data;
      setUser(response);
    });
  }, []);

  console.log(user);

  return (
    <>
      <div>{user && <h1>Hello, {user.name}</h1>}</div>
      {/* {todos ? (
        <div styls={{ display: "flex", flexWrap: "wrap" }}>
          {todos.map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </div>
      ) : (
        "Loading..."
      )} */}
      <div>
        {/* <h3>Count: {counter}</h3>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button> */}
      </div>
    </>
  );
};

export default Todos;
