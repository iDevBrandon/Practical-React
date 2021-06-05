import React, { useState, useEffect, useRef } from "react";

import {
  FormContainer,
  TodoControlForm,
  InputForm,
  InputButton,
  ContentInput,
  NumberInput,
} from "./TodoControl.styles";

const TodoControl = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  // to focus on input field
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
    <TodoControlForm onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <InputForm>
            <ContentInput
              type="text"
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <NumberInput type="number" placeholder="type number" />
            <InputButton type="submit">Update</InputButton>
          </InputForm>
        </>
      ) : (
        <div style={{ display: "flex" }}>
          <InputForm>
            <ContentInput
              type="text"
              placeholder="content"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <NumberInput type="number" placeholder="type number" />
            <InputButton type="submit">Submit</InputButton>
          </InputForm>
        </div>
      )}
    </TodoControlForm>
  );
};

export default TodoControl;
