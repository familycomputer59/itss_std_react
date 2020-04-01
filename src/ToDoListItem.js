import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    return (
      <div className="ToDoListItem">
          <div className="ToDoListItem-title">{this.props.item.title}</div>
          <div className="ToDoListItem-description">
            {this.props.item.content}
          </div>
      </div>
    );
  }
}

export default ToDoListItem;
