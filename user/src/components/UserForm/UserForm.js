import React, { useState } from "react";
import { Button } from "../UI/Button/Button.style";
import { Card } from "../UI/Card/Card.style";
import {
  UserFormContainer,
  UserFormInput,
  UserFormLabel,
} from "./UserForm.style";

const UserForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card>
      <UserFormContainer onSubmit={formSubmitHandler}>
        <UserFormLabel>Username</UserFormLabel>
        <UserFormInput
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <UserFormLabel>Age (Years)</UserFormLabel>
        <UserFormInput
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </UserFormContainer>
    </Card>
  );
};

export default UserForm;
