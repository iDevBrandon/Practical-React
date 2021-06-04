import React from "react";
import { TodoControlForm } from "./TodoControl.styles";

const TodoControl = () => {
  return (
    <TodoControlForm>
      <input type="text" placeholder="content" />
      <input type="number" placeholder="type number" />
      <button type="submit">Submit</button>
    </TodoControlForm>
  );
};

export default TodoControl;
