import React from "react";
import "./index.css";
import Todo from "./components/Todo/Todo";
import DatePicker from "./components/DatePicker/DatePicker";

const App = () => {
  return (
    <div className="container">
      <Todo />
      <DatePicker />
    </div>
  );
};

export default App;
