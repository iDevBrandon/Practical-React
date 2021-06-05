import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TodoItem } from "./Todo.styles";

const Todo = () => {
  return (
    <TodoItem>
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <p>thing to do </p>
      </div>
      <FaTrash />
    </TodoItem>
  );
};

export default Todo;
