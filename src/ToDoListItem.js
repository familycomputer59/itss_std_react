import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    const{
      title,
      description,
      onClick
    } = this.props;
    return (
      <div className="ToDoListItem" onClick={onClick}>
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoListItem;