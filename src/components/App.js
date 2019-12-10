import React, { useState } from 'react';
import Todos from './Todos';
import AddTodoItem from './AddTodoItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainContainer: {
      width: 500,
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }));

function App() {
  const classes = useStyles();

  let [todoItems, setTodoItems] = useState([
    {
      id: 1,
      todo: "Walk the dog",
      done: false
    },
    {
      id: 2,
      todo: "Learn React",
      done: false
    },
    {
      id: 3,
      todo: "Read a book",
      done: false
    }
  ]);

  const handleAddTodoItem = (newTodoItem) => {
    setTodoItems([
      ...todoItems,
      {
        id: todoItems.length + 1,
        todo: newTodoItem,
        done: false
      }
    ])
  }

  const markAsDone = (item) => {
    setTodoItems(
      todoItems.map(i => (i.id === item.id ? { id: i.id, todo: i.todo, done: !i.done } : i ))
    )
  }

  return (
    <div className={classes.mainContainer}>
      <Todos todoItems={todoItems} markAsDone={markAsDone} />
      <AddTodoItem handleAddTodoItem={handleAddTodoItem} />
    </div>
  );
}

export default App;
