import React, { Component } from 'react';
import './ToDoListItem.css';
import TodoItem from "./TodoItem.js"

class ToDoList extends Component {
  render() {
    return (
      <div>
        {
          this.props.todos && this.props.todos.map(todo => {
            return <TodoItem key={todo.id} todo = { todo } delete = { this.props.delete }></TodoItem>
          })
        }
      </div>
    );
  }
}

export default ToDoList;
