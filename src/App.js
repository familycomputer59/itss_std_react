import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import "./ToDoListItem.css"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [], title: '', description: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleDeleteItem = index =>{
    const item = this.state.items;
    item.splice(index,1);
    this.setState({items : item});
  }



  handleSubmit = e => {
    e.preventDefault();
    const item = this.state.items;
    item.push({title: this.state.title,description: this.state.description});
    this.setState({items: item,title: '',description: ''})       
  };

  render() {
    return (
      <div className="App">
      <form className="App-form" onSubmit={this.handleSubmit}>
      <input 
      type="text" 
      placeholder="Enter title"
      name = 'title'
      onChange={this.handleChange}
      value={this.state.name}
      />
      <input 
      type="textarea"
      placeholder="Enter description"
      name = 'description'
      onChange={this.handleChange}
      value = {this.state.name}
      />
      <button>Submit</button>
      </form>
      <div>
      <ToDoListItem 
      list = {this.state.items}
      deleteHandler = {this.handleDeleteItem} 
      />
      </div>
      </div>
      );
  }
}

export default App; 