import React, { useState } from "react";
import { Button } from "../UI/Button/Button.style";
import { Card } from "../UI/Card/Card";
import { UserFormContainer } from "./UserForm.style";

const UserForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  
  return (
    <Card>
      <UserFormContainer onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label>Age (Years)</label>
        <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </UserFormContainer>
    </Card>
  );
};

export default UserForm;
