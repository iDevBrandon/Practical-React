import { useState } from "react";
import TodoControl from "./components/TodoControl";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(todo, ...todos);
  };

  return (
    <div>
      <TodoControl onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
