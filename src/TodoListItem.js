import React from 'react';
import './TodoListItem.css';

class TodoListItem extends React.Component {
  render() {
    return (
      <div>
        <div className="ToDoListItem">
          <div className="ToDoListItem-head">
            <div className="ToDoListItem-title">{this.props.item.title}</div>
            <button
              type="button"
              className="ToDoListItem-remove"
              onClick={this.props.onRemove}
            >
              X
            </button>
          </div>
          <div className="ToDoListItem-description">
            {this.props.item.description}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
