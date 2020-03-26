import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import ToDoForm from "./ToDoForm.js"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          title: "中間テスト",
          description: "4/12  中間テスト"
        },
        {
          title: "Thin先生からの依頼",
          description: "テストの作成"
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
        <h1 className="mb-4">ToDo App</h1>
        <div>
          <ToDoForm
            onAddTodo={this.handleAddToDo}
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
