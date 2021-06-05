import React from "react";
import Todo from "./Todo";
import { TodoListContainer, Todos } from "./TodoList.style";

const TodoList = ({ todos }) => {
  return (
    <TodoListContainer>
      <h1>What's up?</h1>
      <Todos>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </Todos>
    </TodoListContainer>
  );
};

export default TodoList;
