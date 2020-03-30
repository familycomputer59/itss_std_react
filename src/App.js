import React, { Component } from "react";
import TodoList from "./TodoList";
import "./App.css";
var arr = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoListArr: [],
      title: "",
      description: "",
      submitted: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlerTitleChange = this.handlerTitleChange.bind(this);
    this.handlerDesChange = this.handlerDesChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    arr.push({
      title: this.elementTitle.value,
      description: this.elementDes.value
    });
    this.setState({
      toDoListArr: arr,
      title: "",
      description: ""
    });
  }

  handlerDeleteItem = index => {
    arr.splice(index, 1);
    this.setState({
      toDoListArr: arr
    });
  };
  handlerTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handlerDesChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handleSubmit}>
          <div className="nth-child(1)">
            <input
              placeholder="title"
              value={this.state.title}
              onChange={this.handlerTitleChange}
              ref={el1 => (this.elementTitle = el1)}
            />
            <textarea
              placeholder="description"
              value={this.state.description}
              onChange={this.handlerDesChange}
              ref={el2 => (this.elementDes = el2)}
            />
          </div>
          <button type="submit">登録</button>
        </form>
        <div>
          <TodoList
            array={this.state.toDoListArr}
            handlerDeleteItem={this.handlerDeleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
