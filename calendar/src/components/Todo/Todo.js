import React from "react";
import "./Todo.styles.js";
import { FormContainer } from "./Todo.styles";

const Todo = ({ word }) => {
  return <FormContainer>{word}</FormContainer>;
};

export default Todo;
