import React from 'react';
import './ToDoListItem.css';

const ToDoListItem = ({todo, remove}) => {
  // Each Todo
  return (
    <div className="ToDoListItem" onClick={() => remove(todo.id)}>
      <div className="ToDoListItem-title">{todo.title}</div>
      <div className="ToDoListItem-description">{todo.desc}</div>
    </div>
  );
}

export default ToDoListItem;