import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";
import React from "react";
import db from "./firebase";

function Todo({ todo }) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText
          primary={todo.todo}
          secondary="Dummy deadline"
        ></ListItemText>
      </ListItem>
      <Button onClick={(event) => db.collection("todos").doc(todo.id).delete()}>
        DELETE ME
      </Button>
    </List>
  );
}

export default Todo;
