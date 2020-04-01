import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

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
        onDelete={() => this.handleDelete(key)}
      />
    ))
    return (
      <div className="App">
                <h1> Todo App </h1>
        <Form onAdd={this.handleAdd} />
        <div>{todoItems}</div>
      </div>
    );
  }
}

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value})
    }

    handleChangeDescription(event) {
        this.setState({ description: event.target.value })
    }

    handleSubmit(event) {
        this.props.onAdd(this.state)
        this.setState({
          title: '',
          description: ''
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form className="App-form">
                    <input
                        type="text" 
                        name="title" 
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleChangeTitle}
                    />
                    <textarea 
                        type="text" 
                        name="description" 
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChangeDescription}
                    />
                    <button className="button" onClick={this.handleSubmit}>登録</button>
                </form>
            </div>
        );
    }
}

export default App;