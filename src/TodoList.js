import React, { Component } from "react";
import TodoListItem from "./ToDoListItem";

class TodoList extends Component {
  _renderTodoItemList = () => {
    if (this.props.array) {
      return this.props.array.map((item, index) => (
        <div key={index} onClick={() => this.props.handlerDeleteItem(index)}>
          <TodoListItem title={item.title} description={item.description} />
        </div>
      ));
    }
  };

  render() {
    return <div>{this._renderTodoItemList()}</div>;
  }
}

export default TodoList;
