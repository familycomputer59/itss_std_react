import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import Form from "./Form.js"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          title: "第１課",
          description: "オリエンテーション"
        },
        {
          title: "第２課",
          description: "Javascript ES6(1)"
        },
      ]
    }

    this.handleAddToDo = this.handleAddToDo.bind(this)
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this)
  }

  handleAddToDo = (todo) => {
    this.state.todos.push(todo)
    this.setState({ todos: this.state.todos })
  }

  handleDeleteToDo = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({ todos: this.state.todos })
  }

  render() {
    let todo = this.state.todos.map((todo, index) => {
      let result = ""
      if (todo) {
        result = <ToDoListItem 
                  key={index}
                  title={todo.title}
                  description={todo.description}
                  onClick={() => this.handleDeleteToDo(index)}
                />
      }
      return result
    })

    return (
      <div className="App">
        <h1 className="mt-2">ITSS in Japanese</h1>
        <div>
          <Form
            onAdd={this.handleAddToDo}
          />
        </div>
        <div>
          { todo }
        </div>
      </div>
    );
  }
}

export default App;