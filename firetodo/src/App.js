import { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";

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

      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>

      <Button
        disabled={!input}
        variant="contained"
        color="primary"
        type="submit"
        onClick={addTodo}
      >
        Add Todo
      </Button>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
