import React from "react";
import { useHistory } from "react-router";

const TodoCard = ({ todo }) => {
  const { id, title, completed } = todo;
  let history = useHistory();

  return (
    <div
      key={id}
      style={{
        background: "grey",
        margin: "10px",
        padding: "10px",
        width: "150px",
      }}
      onClick={() => history.push(`todo/${id}`)}
    >
      <h1>{title}</h1>
      <div>{completed}</div>
    </div>
  );
};

export default TodoCard;
