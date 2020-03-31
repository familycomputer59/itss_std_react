import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
 
    this.state = {
      title: "",
      description: "",
      toDoList: []
    };
  }
  handleChange(event) {
    this.setState({title: event.target.title,description:event.target.description })
  }
  
  handleSubmit(event) {
    let toDoList = this.state.toDoList;
          toDoList.push({
            title: this.state.title,
            description: this.state.description
          });
          this.setState({toDoList: toDoList, title: "", description: ""});
          event.preventDefault();
  }
  
  render() {
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handleSubmit}>
            <input placeholder="Title"value={this.state.title}
            onChange={this.handleChange}/>
            <textarea placeholder="Description" value={this.state.description}
            onChange={this.handleChange}></textarea>
            <div><button>登録</button></div>
        </form>
        <div>
          <ToDoListItem
            title="テスト"
            description="実験です"
          />
        </div>
      </div>
    );
  }
}

export default App;