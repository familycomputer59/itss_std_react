import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    return (
      <div className="ToDoListItem" onClick ={this.props.Click}>
        <div className="ToDoListItem-title">{this.props.title}</div>
        <div className="ToDoListItem-description">{this.props.description}</div>
      </div>
    );
  }
}

export default ToDoListItem;