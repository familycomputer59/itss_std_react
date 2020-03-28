import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import FormRegister from './FormRegister.js'
import './App.css';

// eslint-disable-next-line no-unused-vars
class App extends Component {
  constructor() {
    super();
    this.state = {
        todos: []
    }
}
AddTodo = (todo) => {
  this.state.todos.push(todo)
  this.setState({ todos: this.state.todos })
}

DeleteTodo = (index) => {
  this.state.todos.splice(index, 1)
  this.setState({ todos: this.state.todos })
}
  render() {
    var ItemsTodo = this.state.todos.map((todo, key) => (
      <ToDoListItem
          key={key}
          title={todo.title}
          description={todo.description}
          onDelete = { () => this.DeleteTodo(key) }
      />
  ))
    return (
      <div className="App">
      < FormRegister onAdd = { this.AddTodo } />
        <div>
        { ItemsTodo }
        </div>
      </div>
    );
  }
}

export default App;