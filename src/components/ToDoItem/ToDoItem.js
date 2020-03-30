import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
  render() {
    const {
      id,
      title,
      description,
      removeItem
    } = this.props;
    return (
      <div className="ToDoListItem" onClick={() => removeItem(id)}>
        <div className="ToDoListItem-title"><h3>{title}</h3></div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoItem;