import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
// import TodoForm from "./ToDoForm.js"
import './App.css';

var toDoList = [];
toDoList.push({title: "2020/03/03", description: "オリエンテーション"});
toDoList.push({title: "2020/03/10", description: "Javascript ES6(1)"});
toDoList.push({title: "2020/03/17", description: "Javascript ES6(2)"});

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: ""
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeDesc = this.handleChangeDesc.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeTitle = (event) => {
    this.setState({title: event.target.value})
  }

  handleChangeDesc = (event) => {
    this.setState({description: event.target.value})
  }

  handleSubmit = (event) => {
    this.props.addItem(this.state)
    this.setState({
      title: "",
      description: ""
    })
    event.preventDefault();
  }
    
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="ToDoForm form-inline">
        <form className="App-form">
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle} />
            <br></br>
            Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleChangeDesc} />
          </label>
          <br></br>
          <input type="submit" value="登録" onClick={this.handleSubmit} />
        </form>
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {toDoList: toDoList};
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem = (todo) => {
    this.state.toDoList.push(todo)
    this.setState({ toDoList: this.state.toDoList })
  }

  removeItem = (index) => {
    this.state.toDoList.splice(index, 1)
    this.setState({ toDoList: this.state.toDoList })
  }

  render() {
    return (
      <div className="App">       
        <TodoForm addItem={this.addItem} />
        <div>
          {this.state.toDoList.map(function (toDoList, index) {
            return <ToDoListItem
              key={index}
              title={toDoList.title}
              description={toDoList.description}
              onClick={() => this.removeItem(index)}
            />
          }.bind(this))}
        </div>
      </div>
    );
  }
}

export default App;