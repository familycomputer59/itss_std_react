import React, { Component } from 'react';
import TodoItem from "./TodoItem.js"

class ToDoListItem extends Component {

  render() {
    const showList = this.props.Todo.length !== 0 ? 
    (
      this.props.Todo.map(job => {
        return (
          <TodoItem key={ job.id }
            removeTodo = {this.props.removeTodo}
            TodoItem = {job} />
        )})) : "";
    return (
      <div>
        {showList}
      </div>
    );
  }
}

export default ToDoListItem;