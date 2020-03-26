import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import ToDoForm from "./ToDoForm.js"
import './App.css';

class App extends Component {
  constructor() {
    super()
    
    let data = JSON.parse(localStorage.getItem("todos"));
    
    this.state = {todos: data? data: []}

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnDelete = this.handleOnDelete.bind(this)
  }

  handleOnDelete(i) {
    this.state.todos.splice(i, 1)
    this.setState({todos: this.state.todos}, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    })
    
  }

  handleOnSubmit(todo) {
    if (todo.title.trim() === "") return
    this.setState({todos: [...this.state.todos, todo]}, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <ToDoForm
            onSubmit={this.handleOnSubmit}
          />
          {
            this.state.todos.map((todo, i) => (
              <ToDoListItem
                key={i} 
                title={todo.title}
                description={todo.description}
                onDoubleClick={() => this.handleOnDelete(i)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;