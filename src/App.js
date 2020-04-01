import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js";
import Form from "./Form.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        title: 'Hello',
        description: 'World'
      }]
    }
  }

  addToTodos = (todo) => {
    let todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <div>
          {
            this.state.todos[0] ?
              this.state.todos.map((todo) =>
                <ToDoListItem
                  title={todo.title}
                  description={todo.description}
                />
              ) :
              <div>ない</div>
          }
        </div>
        <div>
          <Form addToTodos={this.addToTodos} />
        </div>
      </div>
    );
  }
}

export default App;