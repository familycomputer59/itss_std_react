import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js";
import Form from "./Form.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      count: 0
    }
  }

  addToTodos = (todo) => {
    let todos = [...this.state.todos];
    let count = this.state.count;
    todos.push({ id: count, ...todo });
    console.log(count);
    count++;
    this.setState({ todos, count });
    console.log(todos);
    console.log(this.state.todos);
  }

  removeFromTodos = (id) => {
    return () => {
      let todos = [...this.state.todos];
      let count = this.state.count;
      console.log(id);
      todos = todos.filter(todo => todo.id !== id);
      count--;
      this.setState({ todos, count });
      console.log(todos);
      console.log(this.state.todos);
    }
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
                  onClick={this.removeFromTodos(todo.id)}
                />
              ) :
              <div>ない</div>
          }
        </div>
        <div>
          <Form
            addToTodos={this.addToTodos}
          />
        </div>
      </div>
    );
  }
}

export default App;