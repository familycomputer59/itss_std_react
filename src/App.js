import React, { Component } from "react";
import ToDoListItem from "./ToDoListItem.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      title: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange = input => event => {
    this.setState({
      ...this.state,
      [input]: event.target.value
    });
  };

  handleSubmit(event) {
    let todoList = this.state.todoList.concat({
      title: this.state.title,
      description: this.state.description
    });
    this.setState({
      todoList: todoList,
      title: "",
      description: ""
    });
    event.preventDefault();
  }

  handleDelete = index => event => {
    const todoList = this.state.todoList.filter(function (todo, i) {
      return i !== index
    });
    this.setState({ todoList: todoList });
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <div>
          {this.state.todoList.map((todo, index) => {
            return (
              <div key={index} onClick={this.handleDelete(index)}>
                <ToDoListItem
                  title={todo.title}
                  description={todo.description}
                />
              </div>
            );
          })}
        </div>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
          <textarea
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange("description")}
          />
          <button type="submit">登録</button>
        </form>
      </div>
    );
  }
}

export default App;
