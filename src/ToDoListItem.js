import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    const { entries } = this.props;
    const listItems = entries.map((value, index) => {
      return <li key={index}><div className="ToDoListItem">
      <div className="ToDoListItem-title">{value.title}</div>
      <div className="ToDoListItem-description">{value.description}</div>
      </div></li>
    })
    return (
      <ul style={{listStyleType: "none"}}>
        {listItems}
      </ul>
    );
  }
}

export default ToDoListItem;
