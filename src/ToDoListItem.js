import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    return (
      <div className="ToDoListItem" onClick ={this.props.onClick}>
        <div className="ToDoListItem-title">{this.props.title}</div>
        <div className="ToDoListItem-description">{this.props.description}</div>
      </div>
    );
  }
}

ToDoListItem.defaultProps = {
  title: "React(1)",
  description : "課題１の提出"
};

export default ToDoListItem;