import React, { Component } from 'react';

import ToDoList from './components/to-do-list/to-do-list.component';
import ToDoInputForm from './components/to-do-input-form/to-do-input-form.component';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: [],
      title: '',
      description: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createNewItem = event => {
    event.preventDefault();

    this.setState({
      toDoItems: [
        ...this.state.toDoItems,
        {
          id: this.state.toDoItems.length + 1,
          title: this.state.title,
          description: this.state.description
        }
      ]
    });
  };

  removeItem = id => {
    this.setState({
      toDoItems: this.state.toDoItems.filter(toDoItem => toDoItem.id !== id)
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>TO-DO LIST</h1>
        <div>
          <ToDoInputForm
            handleChange={this.handleChange}
            handleSubmit={this.createNewItem}
          />
          <ToDoList
            toDoItems={this.state.toDoItems}
            removeItem={this.removeItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
