import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {
    todoList: [],
    title: "",
    description: ""
  };

  this.changeTodo = this.changeTodo.bind(this);
  this.submitTodo = this.submitTodo.bind(this);
  this.deleteTodo = this.deleteTodo.bind(this);
  }

  changeTodo(event) {
    this.setState({
      [event.target.placeholder]: event.target.value
    });
  };

  submitTodo(event) {
    let todoList = this.state.todoList.filter((item, index, arr) => {
      return arr[index].title !== this.state.title
    })
    this.setState({
      todoList: [...todoList, {title: this.state.title, description: this.state.description}]
    });
    this.setState({
      title: "",
      description: ""
    });
    event.preventDefault();
  }


  deleteTodo(todoIndex, e) {
    this.setState({
      todoList: this.state.todoList.filter((value, index) => {return index !== todoIndex})
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.todoList.map((todo, index) => {
            return (
              <div key={index} onClick={(e) => this.deleteTodo(index, e)}>
                <ToDoListItem
                  title={todo.title}
                  description={todo.description}
                />
              </div>
            );
          })}
        </div>
        <form className="App-form" onSubmit={this.submitTodo}>
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.changeTodo}
            required
          />
          <textarea
            placeholder="description"
            value={this.state.description}
            onChange={this.changeTodo}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;
