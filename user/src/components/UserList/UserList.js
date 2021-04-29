import React from "react";
import { Card } from "../UI/Card/Card.style";
import { UserListItem } from "../UserListItem/UserListItem.style";
import { UserListContainer } from "./UserList.style";

const UserList = (props) => {
  return (
    <div>
      <Card>
        <UserListContainer>
          {props.users.map((user) => (
            <UserListItem key={user.id}>{user.age}</UserListItem>
          ))}
        </UserListContainer>
      </Card>
    </div>
  );
};

export default UserList;
