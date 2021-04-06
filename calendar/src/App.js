import React, { useState } from "react";
import "./index.css";
import Todo from "./components/Todo/Todo";
import DatePicker from "./components/DatePicker/DatePicker";

const App = () => {
  const [word, setWord] = useState("Parent");
  return (
    <div className="container">
      <Todo word={word} />
      <DatePicker changeWord={(word) => setWord(word)} />
    </div>
  );
};

export default App;
