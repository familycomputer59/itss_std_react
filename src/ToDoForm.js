import React, { Component } from 'react';
import './ToDoListItem.css';
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    let newItemTitle = this.refs.itemTitle.value;
    let newItemDes = this.refs.itemDescripton.value;
    if(newItemTitle && newItemDes) {
      let item = {
        id: this.props.length +1,
        title: newItemTitle,
        des: newItemDes
      }
      this.props.addItem(item);
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="ToDoListItem">
        <input type="text" ref="itemTitle" className="w3-input" placeholder="Title"/>
        <br></br>
        <textarea ref="itemDescripton" className="w3-input" placeholder="Description"/>
        <br></br>
        <button type="submit" className="btn btn-default">Add</button> 
      </form>
    );   
  }
}

export default TodoForm;
