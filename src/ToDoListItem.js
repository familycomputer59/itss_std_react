import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
	handleDeleteItem = () => {
    this.props.onDelete();
  };
  render() {
    return (
      <div className="ToDoListItem" onClick={this.handleDeleteItem}>
        <div className="ToDoListItem-title">{this.props.title}</div>
        <div className="ToDoListItem-description">{this.props.description}</div>
      </div>
    );
  }
}

export default ToDoListItem;