import React from "react";
import "./index.css";
import Todo from "./components/Todo/Todo";
import CalendarDate from "./components/CalendarDate/CalendarDate";

const App = () => {
  return (
    <div className="container">
      <Todo />
      <CalendarDate />
    </div>
  );
};

export default App;
