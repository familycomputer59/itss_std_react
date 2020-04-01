import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  
  render() {
    const {
      element,
      ...props
    } = this.props;

    return (
      <div className="ToDoListItem"{...props}>
        <div className="ToDoListItem-title">{this.props.element.title}</div>
        <div className="ToDoListItem-description">{this.props.element.description}</div>
      </div>
    );
  }
}

export default ToDoListItem;
