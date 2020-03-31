import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      todolist: [],
      title: '',
      description: ''
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let templist = this.state.todolist;
    templist.push({
      title: this.state.title,
      description: this.state.description
    });
    this.setState({
      todolist: templist,
      title: '',
      description: ''
    });
  }

  render() {
      var todolist = this.state.todolist.map((item, id) => (
      <ToDoListItem
        id={id}
        title={item.title}
        description={item.description}
      />
    ));
      return (
      <div className="App">
        <form className="App-form">
          <input 
            placeholder="Title"
            value={this.state.title} 
            onChange={this.handleTitle} 
            />
          <textarea
            placeholder="Description"
            value={this.state.description} 
            onChange={this.handleDescription} 
            />
          <button onClick={this.handleSubmit}>登録</button>
        </form>
        <div>
            {todolist}
        </div>
      </div>
    );
  }
}
export default App;