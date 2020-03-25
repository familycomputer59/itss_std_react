import React, { Component } from 'react';
import TodoQuery from "./TodoQuery"
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  state = {
    idGenerator: 0,
    Todo: []
  }

  addTodo = (title, description) => {
    let list = this.state.Todo
    list.push({
      id: this.state.idGenerator, 
      title: title, 
      description: description
    })
    this.setState({idGenerator: this.state.idGenerator + 1, Todo: list})
  }

  removeTodo = (todoId) => {
    let list = this.state.Todo
    list = list.filter((job) => {
      return job.id !== todoId
    })
    this.setState({Todo: list})
  }

  render() {
    return (
      <div className="App">
        <div>          
          <TodoQuery 
            addTodo = {this.addTodo}          
          />
          <ToDoListItem
            Todo = {this.state.Todo}
            removeTodo = {this.removeTodo}
          />
        </div>
        {/* <button onClick={this.addTodo}>Add me</button> */}
      </div>
    );
  }
}

export default App;