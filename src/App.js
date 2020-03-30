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
          title: "中間テスト",
          description: "4/12  中間テスト"
        },
        {
          title: "Thin先生からの依頼",
          description: "テストの作成"
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