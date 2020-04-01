import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    return (
      <div className="ToDoListItem">
        <div className="ToDoListItem-title"></div>
        <div className="ToDoListItem-description"></div>
      <div className="ToDoListItem" onClick={this.props.onClick}>
      <div className="ToDoListItem-title">{this.props.title}</div>
      <div className="ToDoListItem-description">{this.props.description}</div>
      </div>
    );
  }