import React from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div>
      <UserForm />
      <UserList users={[]} />
    </div>
  );
}

export default App;
