import React, { Component } from 'react';
import ToDoList from "./ToDoList.js"
import TodoForm from "./ToDoForm.js"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      showForm: false,
      todos: [
        {
          id: 1,
          title: '中間テスト',
          des: '４月１２　テスト'
        },
        {
          id: 2,
          title: 'Thin先生から依頼',
          des: 'スライドを作成する'
        }
      ]
    }
    this.delete = this.delete.bind(this);
    this.addItem = this.addItem.bind(this);
    this.showForm = this.showForm.bind(this)
  }
  delete(key){
    this.setState({ todos: this.state.todos.filter(todo => todo.id != key) })
  }
  addItem(todoItem) {
    this.state.todos.push(todoItem)
    this.setState({ todos: this.state.todos });
    this.setState({ showForm: false });
  }
  showForm(){
    this.setState({ showForm: true });
  }
  render() {
    let form
    if (this.state.showForm) {
      let last_id = this.state.todos.length > 0 ? this.state.todos[this.state.todos.length - 1].id : 0
      form = <TodoForm addItem={this.addItem} length = { last_id } />
    }
    return (
      <div className="App">
        <h1> TodoApp </h1>
        { form }
        <div>
          <ToDoList todos = { this.state.todos } delete = { this.delete }/>
        </div>
        <button class="btn" onClick={ this.showForm }><i class="fa fa-plus"></i></button>
      </div>
    );
  }
}

export default App;
