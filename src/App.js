import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [{
        title: "",
        description: "",
      }],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const todoList = this.state.todoList.slice(0);
    todoList.push({ title: document.getElementById("title").value, description: document.getElementById("description").value });
    this.setState({
      todoList: todoList,
    });
    document.getElementById("App_form").reset();
    event.preventDefault();
  }
  handleClick(index) {
    const todoList = this.state.todoList.slice(0);
    todoList.splice(index, 1);
    this.setState({
      todoList: todoList,
    });
  }
  render() {
    const todoList = this.state.todoList;
    const todoListItems = todoList.map((item, index) => {
      if (item.title !== "" && item.description !== "") {
        return (
          <ToDoListItem
            title={item.title}
            description={item.description}
            onClick={() => this.handleClick(index)}
          />
        )
      }
    });
    return (
      <div className="App">
        <form className="App-form" id="App_form" onSubmit={this.handleSubmit}>
          <div>
            <input id="title" type="text" name="title" placeholder="title" />
            <textarea id="description" name="description" rows="3" placeholder="description" />
          </div>
          <div>
            <button type="submit" value="Submit" >登録</button>
          </div>
        </form>
        <div>
          {todoListItems}
        </div>
      </div>
    );
  }
}

export default App;
