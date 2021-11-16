import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Todo = () => {
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setTodoDetails(res.data);
      });
  }, [id]);

  const { id: todoId, userId, title, completed } = todoDetails;
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1>{`Todo id : ${todoId}`}</h1>
          <h1>{`Todo id : ${userId}`}</h1>
          <h1>{`Todo id : ${title}`}</h1>
          <h1>{`Todo id : ${completed}`}</h1>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Todo;
