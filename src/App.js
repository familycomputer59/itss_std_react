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
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleTitle(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }
  handleDescription(event) {
    console.log(event.target.value);
    this.setState({ description: event.target.value });
  }
  handleSubmit(event) {
    let templist = this.state.todolist;
    templist.push({
      title: this.state.title,
      description: this.state.description
    });
    console.log(templist);
    this.setState({ todolist: templist });
    this.setState({
      title: '',
      description: ''
    });
    // alert("You are submitting " + this.state.title + this.state.description);
    event.preventDefault();
  }

  handleDelete(id) {
    let templist = this.state.todolist;
    console.log(templist);
    templist.splice(id, 1);
    console.log(templist);
    this.setState({ todolist: templist });
  }

  render() {
    var todolist = this.state.todolist.map((item, id) => (
      <ToDoListItem
        id={id}
        title={item.title}
        description={item.description}
        onDelete={() => this.handleDelete(id)}
      />
    ));
    return (
      <div className="App">
        <form className="App-form">
          <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.handleTitle} />
          <textarea name="description" value={this.state.description} placeholder="Description" onChange={this.handleDescription} />
          <button type="submit" onClick={this.handleSubmit}>登録</button>
        </form>
        <div>
          {todolist}
        </div>
      </div>
    );
  }
}

export default App;