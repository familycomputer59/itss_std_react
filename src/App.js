import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import Form from "./Form.js"
import './App.css';

var list = [];
list.push({title: "4月29日（水）", description: "昭和の日"});
list.push({title: "5月3日（日）", description: "憲法記念日"});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {toDoList: list};
  }

  handleAdd = (todo) => {
      this.state.toDoList.push(todo)
      this.setState({ toDoList: this.state.toDoList })
  }

  handleDelete = (index) => {
    this.state.toDoList.splice(index, 1)
    this.setState({ todos: this.state.toDoList })
  }

  render() {
    return (
      <div className="App">       
        <Form addItem={this.handleAdd} />
        <div>
          {this.state.toDoList.map(function (toDoList, index) {
            return <ToDoListItem
              key={index}
              title={toDoList.title}
              description={toDoList.description}
              onDelete={() => this.handleDelete(index)}
            />
          }.bind(this))}
        </div>
      </div>
    );
  }
}

export default App;