import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: '',
      inputDescription: '',
      todoList: []
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {todoList,inputTitle,inputDescription} = this.state;
    const newData = todoList.concat([{
      title: inputTitle,
      description: inputDescription,
    }]);
    this.setState({
      todoList: newData,
      inputTitle: '',
      inputDescription: ''
    })
  }

  deleteTodo = (value) => {
    const {todoList} = this.state;
    const newData = todoList.filter((element) => element!==value);
    this.setState({todoList: newData});
  }

  handleChangeDescription = (e) => {
    this.setState({
      inputDescription: e.target.value
    })
  }

  handleChangeTitle = (e) => {
    this.setState({
      inputTitle: e.target.value
    })
  }

  renderTodoList = () => {
    const {todoList} = this.state;

    return (todoList.map((element,index) => (
      <ToDoListItem
        key={index}
        element={element}
        onClick={() => this.deleteTodo(element)}
      />
  )));
  }

  render() {
    return (
      <div className="App">
      <form className="App-form" onSubmit={this.handleSubmit}>
      <label>
        TO DO APP
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.inputTitle}
          onChange={this.handleChangeTitle}
        />
        <input
        type="text"
        name="description"
        placeholder="description"
        value={this.state.inputDescription}
        onChange={this.handleChangeDescription}
        />
        </label>
        <button type="submit" value="Submit">登録</button >
      </form>

        <div>
          {this.renderTodoList()}
        </div>
      </div>
    );
  }
}

export default App;