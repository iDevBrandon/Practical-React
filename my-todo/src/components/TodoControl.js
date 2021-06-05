import React, { useState } from "react";

import {
  FormContainer,
  TodoControlForm,
  InputForm,
  InputButton,
  ContentInput,
  NumberInput,
} from "./TodoControl.styles";

const TodoControl = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <FormContainer>
      <TodoControlForm onSubmit={handleSubmit}>
        <InputForm>
          <ContentInput
            type="text"
            placeholder="content"
            value={input}
            onChange={handleChange}
          />
          <NumberInput type="number" placeholder="type number" />
        </InputForm>
        <InputButton type="submit">Submit</InputButton>
      </TodoControlForm>
    </FormContainer>
  );
};

export default TodoControl;
