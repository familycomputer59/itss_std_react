import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    const todoItem = this.props;
     return (
      <div className="ToDoListItem">
      <div className="ToDoListItem-title">{todoItem.title}</div>
      <div className="ToDoListItem-description">{todoItem.description}</div>
      </div>
    );
  }	  

export default ToDoListItem;
