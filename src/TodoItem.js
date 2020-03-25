import React, { Component } from 'react';
import './ToDoListItem.css';

class TodoItem extends Component {
  
  removeJob = () => {
    this.props.removeTodo(this.props.TodoItem.id)
  }

  render() {
    return (
      <div className="ToDoListItem" onClick={this.removeJob}>
        <div className="ToDoListItem-title">{this.props.TodoItem.title}</div>
        <div className="ToDoListItem-description">{this.props.TodoItem.description}</div>
      </div>
    )
  }
}

export default TodoItem;