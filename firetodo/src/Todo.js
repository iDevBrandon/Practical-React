import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";
import React from "react";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo({ todo }) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText
          primary={todo.todo}
          secondary="Dummy deadline"
        ></ListItemText>
      </ListItem>
      <DeleteForeverIcon
        onClick={(event) => db.collection("todos").doc(todo.id).delete()}
      />
    </List>
  );
}

export default Todo;
