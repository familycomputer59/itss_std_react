import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import TodoForm from "./TodoForm.js"
import './App.css';

class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          title: "ダーリン、君に会いたい",
          description: "何をしていますか"
        },
        {
          title: "新型コロナウイルス",
          description: "１５日間で家を出ない　"
        },
      ]
    }

    this.handleAddList = this.handleAddList.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }
  handleAddList(index) {
    this.state.todos.push(index)
    this.setState({ todos: this.state.todos })
  }
  handleDeleteList(index){
    this.state.todos.splice(index, 1)
    this.setState({ todos: this.state.todos })
  }
  render() {
    return (
      <div className="App">
        <div>
        <TodoForm onSubmit={this.handleAddList} />
          {
            this.state.todos.map((todo, i) => (
              <ToDoListItem
                key={i} 
                title={todo.title}
                description={todo.description}
                onClick={() => this.handleDeleteList(i)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;