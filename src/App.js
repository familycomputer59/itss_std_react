import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import ToDoForm from "./ToDoForm.js"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
            todos:[]
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(todo) {
    this.state.todos.push(todo)
    this.setState({ todos: this.state.todos })
  }

  handleDelete(i) {
    this.state.todos.splice(i, 1)
    this.setState({ todos: this.state.todos })
  }

  render() {
    return (
      <div className="App">
        <div>
          <ToDoForm
            onSubmit={this.handleAdd}
          />
          {
            this.state.todos.map((todo, i) => (
              <ToDoListItem
                key={i} 
                title={todo.title}
                description={todo.description}
                onDoubleClick={() => this.handleDelete(i)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;