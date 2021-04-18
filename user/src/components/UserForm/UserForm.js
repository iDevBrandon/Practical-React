import React from "react";
import { Button } from "../UI/Button/Button.style";
import { Card } from "../UI/Card/Card";
import { UserFormContainer } from "./UserForm.style";

const UserForm = () => {
  return (
    <Card>
      <UserFormContainer>
        <label>Username</label>
        <input type="text" />
        <label>Age (Years)</label>
        <input type="number" />
        <Button type="submit">Add User</Button>
      </UserFormContainer>
    </Card>
  );
};

export default UserForm;
