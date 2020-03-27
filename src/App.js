import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import ToDoForm from "./ToDoForm";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoList: []
    }
  }

  append = (value) => {
    const { todoList } = this.state
    todoList.push(value)
    this.setState({ todoList: todoList })
  }

  remove = (value) => {    
    const { todoList } = this.state
    let newTodoList = todoList.filter((element) => element !== value)
    this.setState({ todoList: newTodoList })
  }

  renderItem = () => {
    const { todoList } = this.state
    let item = todoList.map((element, index) => (
      <ToDoListItem
        title={element.title} 
        key={index} 
        description={element.description} 
        onClick={() => this.remove(element)} 
      />
    ))
    return item
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <ToDoForm append={this.append} />
        {this.renderItem()}
      </div>
    );
  }
}

export default App;