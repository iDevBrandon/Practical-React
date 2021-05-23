import React, { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodo = [todo, ...todos];

    setTodos(newTodo);
    console.log(...todos);
  };

  return (
    <div>
      <h1>What's your plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
};

export default TodoList;
