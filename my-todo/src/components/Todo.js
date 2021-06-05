import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { TodoItem } from "./Todo.styles";
import TodoControl from "./TodoControl";

const Todo = ({ todo, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoControl edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <TodoItem>
      <div className="checkbox">
        <MdCheckBoxOutlineBlank
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
        />
        <p>{todo.text}</p>
      </div>
      <FaTrash onClick={() => removeTodo(todo.id)} />
      <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
    </TodoItem>
  );
};

export default Todo;
