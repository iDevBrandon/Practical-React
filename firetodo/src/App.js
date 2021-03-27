import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Take the rubbish out",
    "i am idev",
  ]);
  const [input, setInput] = useState("");
  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();
    console.log("clicked me");

    setTodos([...todos, input]);
    setInput(""); // clear up the input
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
