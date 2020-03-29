import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  removeItem=()=>{
    var i=this.props.id;
    var removeItem=this.props.removeItem;
    removeItem(i);
  }
  render() {
    const {
      title,
      description,
      id,
      removeItem
    } = this.props;
    return (
      <div className="ToDoListItem"  onClick={this.removeItem}>
        <div className="ToDoListItem-title"  >{this.props.title}</div>
        <div className="ToDoListItem-description" >{this.props.description}</div>
      </div>
    );
  }
}

export default ToDoListItem;
