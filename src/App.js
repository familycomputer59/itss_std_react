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
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeDes = this.handleChangeDes.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
     }
  handleChangeTitle(event) {
    this.setState({title: event.target.title})
  }
  
  handleChangeDes(event) {
    this.setState({description: event.target.description})
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
            onChange={this.handleChangeTitle}/>
            <textarea placeholder="Description" value={this.state.description}
            onChange={this.handleChangeDes}></textarea>
            <div><button>登録</button></div>
        </form>
        <div>
            {
            this.state.toDoList.map((item => (
                <ToDoListItem />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
