import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

import FormApp from './FormApp.js'

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }
    
    handleAdd = (todo) => {
        this.state.todos.push(todo)
        this.setState({ todos: this.state.todos })
    }
    
    handleDelete = (index) => {
        this.state.todos.splice(index, 1)
        this.setState({ todos: this.state.todos })
    }
    
    render() {
        var todoItems = this.state.todos.map((todo, key) => (
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
            < FormApp onAdd = { this.handleAdd } />
            <div>
            { todoItems }
            </div>
          </div>
        );
    }
}

export default App;