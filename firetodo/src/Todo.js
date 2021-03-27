import { List, ListItem, ListItemText, Modal } from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo({ todo }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div>
          <h1>I am a modal</h1>
          <button onClick={(e) => setOpen(false)}></button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText
            primary={todo.todo}
            secondary="Dummy deadline"
          ></ListItemText>
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon
          onClick={(event) => db.collection("todos").doc(todo.id).delete()}
        />
      </List>
    </>
  );
}

export default Todo;
