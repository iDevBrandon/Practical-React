import React from "react";
import Todo from "./Todo";
import { TodoListContainer, Todos } from "./TodoList.style";

const TodoList = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  return (
    <TodoListContainer>
      <h1>What's up?</h1>
      <Todos>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </Todos>
    </TodoListContainer>
  );
};

export default TodoList;
