import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    return (
      <div 
        className="ToDoListItem card mb-3"
        onClick={this.props.onClick}
      >
        <div className="ToDoListItem card-body">
          <div className="ToDoListItem-title card-title">
            {this.props.title}
          </div>
          <div className="ToDoListItem-description card-text">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
