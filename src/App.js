import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';
import ToDoForm from "./ToDoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoLists: [
        {
          title: "title1",
          description: "description1"
        },
        {
          title: "title2",
          description: "description2"
        },
      ]
    };
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
  }
  handleAddToDo = item => {
    this.state.toDoLists.push(item);
    this.setState({ toDoLists: this.state.toDoLists });
  };
  handleDeleteToDo = index => {
    this.state.toDoLists.splice(index, 1);
    this.setState({ toDoLists: this.state.toDoLists });
  };
  
  render() {
    return (
      <div>
      <div className="App">
        <h1 className="mb-4">ToDo App</h1>
        <ToDoForm onAddToDo={this.handleAddToDo} />
        <div>
          {this.state.toDoLists.map((item, index) => {
              return (
                <ToDoListItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  onToDoDelete={() => this.handleDeleteToDo(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;