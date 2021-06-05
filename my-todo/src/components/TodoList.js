import React, { useState } from "react";
import Todo from "./Todo";
import { TodoListContainer, Todos } from "./TodoList.style";

const TodoList = () => {
  return (
    <TodoListContainer>
      <h1>What's up?</h1>
      <Todos>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </Todos>
    </TodoListContainer>
  );
};

export default TodoList;
