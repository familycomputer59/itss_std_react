import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      works: [
        {
          title: "Task1",
          description: "FooBar1"
        },
        {
          title: "Task2",
          description: "FooBar2"
        },
      ],
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    var newArray = this.state.works;
    newArray.unshift({
      title: this.refs.task.value,
      description: this.refs.description.value
    });
    this.setState({
      works: newArray
    });
  }
  triggerDelete(index) {
    var newArray = this.state.works.filter((_, i) => i !== index);
    this.setState({
      works: newArray
    });
  }
  render() {
    console.log(this.state.works);
    var works = this.state.works.map((item, idx) =>
      <ToDoListItem
        title={item.title}
        description={item.description}
        onClick={() => this.triggerDelete(idx)}
      />
    );
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.mySubmitHandler}>
          <p>New task</p>
          <input
            type="text"
            name="task"
            ref="task"
          />
          <p>Description</p>
          <input
            type="description"
            name="description"
            ref="description"
          />
          <input
            type='submit'
            value='Add'
          />
        </form>
        <div>
          {works}
        </div>
      </div>
    );
  }
}

export default App;