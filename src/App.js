import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';
import ToDoForm from "./ToDoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleAdd = item => {
    this.state.todoList.push(item);
    this.setState({ todoList: this.state.todoList });
  };
  handleDelete = key => {
    this.state.todoList.splice(key, 1);
    this.setState({ todoList: this.state.todoList });
  };
  render() {
    return (
      <div className="App">
        <ToDoForm onAdd={this.handleAdd} />
        <div>
          {this.state.todoList.map((item, key) => {
            return (
              <ToDoListItem
                key={key}
                title={item.title}
                description={item.description}
                onDelete={() => this.handleDelete(key)}
              />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;