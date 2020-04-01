import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
    handleEdit = () => {
        this.props.openEditForm()
        this.props.editTask(this.props.name, this.props.getIndexTask)
    }
    handleDelete = () => {
        this.props.deleteTask(this.props.name)
    }
  render() {
    return (
      <div className="ToDoListItem">
        <div className="ToDoListItem-title">
        <td>{this.props.name}</td>
            <td>
                <button type="button" className="btn btn-outline-primary" onClick={this.handleEdit}><i className="far fa-edit"></i>Edit</button>
            </td>
            <td>
                <button type="button" className="btn btn-outline-primary" onClick={this.handleDelete}><i className="fa fa-trash"></i>Delete</button>
            </td></div>
        <div className="ToDoListItem-description"></div>
      </div>
    );
  }
}

export default ToDoListItem;