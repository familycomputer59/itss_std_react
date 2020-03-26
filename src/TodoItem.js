import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoItem extends Component {
  constructor(props){
    super(props)
    this.delete = this.delete.bind(this)
  }
  delete(){
    this.props.delete(this.props.todo.id)
  }
  render() {
    return (
      <div className="ToDoListItem" onClick={this.delete}>
        <div className="ToDoListItem-title">
          { this.props.todo.title }
        </div>
        <div className="ToDoListItem-description">
          { this.props.todo.des }
        </div>
      </div>
    );
  }
}

export default ToDoItem;
