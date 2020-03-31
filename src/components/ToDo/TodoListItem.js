import React from 'react';

export const ToDoListItem = ({ todo, onDeleteTodo }) => (
  <div className="todo-item">
    <div className="todo-item-title">{todo.title}</div>
    <div className="todo-item-description">{todo.description}</div>
    <button onClick={() => onDeleteTodo(todo.id)} >Delele todo</button>
  </div>
)