import { List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";
import React from "react";

function Todo({ todo }) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={todo} secondary="Dummy deadline"></ListItemText>
      </ListItem>
    </List>
  );
}

export default Todo;
