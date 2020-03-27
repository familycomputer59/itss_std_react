import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
      const {
          title,
          description
      } = this.props;
      // Title description を HTMLに追加する
    return (
      <div className="ToDoListItem" onClick={this.props.onClick}>
        <div className="ToDoListItem-title">{this.props.title}</div>
        <div className="ToDoListItem-description">{this.props.description}</div>
        <span class="hoverText">click to delete</span>
      </div>
    );
  }
}

export default ToDoListItem;