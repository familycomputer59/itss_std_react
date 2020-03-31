import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    const { itemList, deleteItem } = this.props
    return itemList.map((item, index) => (
      <div className="ToDoListItem">
        <div className="ToDoListItem-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
          {item.title}
          <span onClick={() => deleteItem(index)} style={{ textAlign: 'right', color: 'blue', cursor: 'pointer' }}>Delete</span>
        </div>
        <div className="ToDoListItem-description">
          {item.description}
        </div>
      </div>
    ))
  }
}

export default ToDoListItem;