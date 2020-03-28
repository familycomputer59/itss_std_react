import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  handleDeleteItem = () => {
    this.props.onToDoDelete();
  };
  render() {
    var item = this.props;
    return (
      <div className="ToDoListItem" onClick={this.handleDeleteItem}>
        <div className="ToDoListItem-title">{item.title}</div>
        <div className="ToDoListItem-description">{item.description}</div>
      </div>
    );
  }
}

export default ToDoListItem;