import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  addTodoItem: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  },
  btn: {
    alignSelf: 'center',
    marginTop: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
  }
}));

function AddTodoItem({ handleAddTodoItem }) {
  const classes = useStyles();

  const [newTodoItem, setNewTodoItem] = useState("");

  const handleOnChange = e => {
    setNewTodoItem(e.target.value);
  };

  const handleOnClick = () => {
    handleAddTodoItem(newTodoItem);
    setNewTodoItem("");
  };

  return (
    <div className={classes.addTodoItem}>
      <TextField
        id="standard-basic"
        label="What to do?"
        type="text"
        onChange={handleOnChange}
        value={newTodoItem}
      />
      <Button className={classes.btn} color="primary" onClick={handleOnClick}>
        + Add new
      </Button>
    </div>
  );
}

export default AddTodoItem;