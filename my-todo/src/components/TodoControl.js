import React from "react";
import {
  FormContainer,
  TodoControlForm,
  InputForm,
  ContentForm,
  NumberForm,
  InputButton,
} from "./TodoControl.styles";

const TodoControl = (e) => {
  return (
    <FormContainer>
      <TodoControlForm>
        <InputForm>
          <ContentForm type="text" placeholder="content" />
          <NumberForm type="number" placeholder="type number" />
        </InputForm>
        <InputButton type="submit">Submit</InputButton>
      </TodoControlForm>
    </FormContainer>
  );
};

export default TodoControl;
