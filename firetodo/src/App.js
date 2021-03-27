import { useEffect, useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database and fetch new todos as they get added
  useEffect(() => {
    // this code here ... fires when the app.js loads
    db.collection("todos").onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

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
          <Todo todo={todo} key={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
