import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  completed: {
    textDecoration: "line-through"
  },
  notCompleted: {
    textDecoration: "none"
  }
}));

function Todos({ todoItems, markAsDone }) {
  const classes = useStyles();

  return (
    <div>
      <List component="ul" aria-label="secondary mailbox folders">
        {todoItems.map(item => (
          <li key={item.id}>
            <ListItem component="span">
              <ListItemText
                primary={item.todo}
                className={
                  item.done === false ? classes.notCompleted : classes.completed
                }
              />
              <Checkbox
                checked={item.done}
                onChange={() => markAsDone(item)}
                value={item.done}
                color="primary"
              />
            </ListItem>
            <Divider />
          </li>
        ))}
      </List>
    </div>
  );
}

export default Todos;
