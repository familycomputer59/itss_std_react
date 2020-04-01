import React, { Component } from 'react';
import ToDoList from "./ToDoList";
import './App.css';

const TodoForm = ({addTodo}) => {
  // Input tracker
  let title;
  let desc;

  return (
    <div className="ToDoForm">
      <div>
        <input placeholder="title" ref={node => {title = node;}}/>
        <input placeholder="description" ref={node => {desc = node;}}/>
      </div>
      <div>
        <button onClick={() => {
          addTodo(title.value, desc.value);
          title.value = '';
          desc.value = '';
        }}>
        登録
        </button>
      </div>
    </div>
  );
};

window.id = 0;
class App extends Component {
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }

  // Add todo handler
  addTodo(_title, _desc){
    // Assemble data
    const todo = {title: _title, desc: _desc, id: window.id++}
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data});
  }

  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });

    // Update state with filter
    this.setState({data: remainder});
  }

  render() {
    return (
      <div className="App">
        <div className="AppColumn">
          <ToDoList
            todos={this.state.data} 
            remove={this.handleRemove.bind(this)}
          />
        </div>
        <div className="AppColumn">
          <TodoForm addTodo={this.addTodo.bind(this)}/>
          <p>※アイテムをクリックした時にToDoを削除します</p
        ></div>
        
      </div>
    );
  }
}

export default App;