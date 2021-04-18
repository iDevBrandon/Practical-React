import React from "react";
import { Card } from "../UI/Card/Card";
import { UserListItem } from "../UserListItem/UserListItem.style";
import { UserListContainer } from "./UserList.style";

const UserList = () => {
  return (
    <div>
      <Card>
        <UserListContainer>
          <UserListItem />
          <UserListItem />
          <UserListItem />
        </UserListContainer>
      </Card>
    </div>
  );
};

export default UserList;
