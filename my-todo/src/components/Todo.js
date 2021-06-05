import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TodoItem } from "./Todo.styles";

const Todo = ({ todo }) => {
  return (
    <TodoItem>
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <p>{todo.text}</p>
      </div>
      <FaTrash />
    </TodoItem>
  );
};

export default Todo;
