import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
