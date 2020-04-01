import React from 'react';
import './ToDoList.css';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<ToDoListItem todo={todo} key={todo.id} remove={remove}/>)
  });
  return (
    <div className="ToDoList">
      <p>ToDo</p>
      <ul>{todoNode}</ul>
    </div>
  );
}

export default ToDoList;