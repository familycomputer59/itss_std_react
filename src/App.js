import React, { Component } from "react";
import ToDoItem from "./components/ToDoItem/ToDoItem.js"
import CreateItemForm from "./components/CreateItemForm/ItemForm.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: [],
      title: "",
      description: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);

  }

  onChange(e) {
    const {name, value} = e.target;
    this.setState(() => ({
      [name]: value
    }))
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.setState({
      toDoList: [...this.state.toDoList, {title: this.state.title, description: this.state.description}]
    });
    this.setState({
        title: "",
        description: ""
    });
  }

  removeItem(rmIndex) {
    this.setState({
      toDoList: this.state.toDoList.filter((value, index) => {return index !== rmIndex})
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <CreateItemForm 
            onChange={this.onChange}
            onFormSubmit={this.onFormSubmit}
            title={this.state.title}
            description={this.state.description}
          />
          {this.state.toDoList.map((item, index) => (
            <ToDoItem
              id={index}
              title={item.title}
              description={item.description}
              removeItem={this.removeItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
