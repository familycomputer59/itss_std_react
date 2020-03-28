import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    const title = this.props.title;
    const description = this.props.description;
    // const index = this.props.index;
    return (
      <div className="ToDoListItem" onClick={this.props.onClick}>
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoListItem;