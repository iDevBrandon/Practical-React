import React from "react";
import { Card } from "../UI/Card/Card.style";
import { UserListItem } from "../UserListItem/UserListItem.style";
import { UserListContainer } from "./UserList.style";

const UserList = () => {
  return (
    <div>
      <Card>
        <UserListContainer>
          <UserListItem />
      
        </UserListContainer>
      </Card>
    </div>
  );
};

export default UserList;
