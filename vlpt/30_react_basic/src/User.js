import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>
        {user.username} <span>({user.email})</span>
      </b>
    </div>
  );
};

export default User;
