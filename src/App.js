import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

import TodoForm from './TodoForm.js'

class App extends Component {
    constructor() {
        super();
        this.state = {
            task: []
        }
    }
    
    handleAdd = (todo) => {
        this.state.task.push(todo)
        this.setState({ task: this.state.task })
    }
    
    handleDelete = (index) => {
        this.state.task.splice(index, 1)
        this.setState({ task: this.state.task })
    }
    
    render() {
        var todoItems = this.state.task.map((todo, key) => (
            <ToDoListItem
                key={key}
                title={todo.title}
                description={todo.description}
                onDelete = { () => this.handleDelete(key) }
            />
        ))
        
        
        return (
          <div className="App">
            <h1> Todo App </h1>
            <TodoForm onAdd = { this.handleAdd } />
            <div>
            { todoItems }
            </div>
          </div>
        );
    }
}

export default App;