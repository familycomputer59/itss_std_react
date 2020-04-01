import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
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
      </div>
    );
  }
}

export default App;