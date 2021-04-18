import React from "react";

const Button = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  
  return <button onSubmit={onSubmit}>{props.children}</button>;
};

export default Button;
