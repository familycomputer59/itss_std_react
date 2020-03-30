import React, { Component } from "react";
import "./App.css";

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  handleSubmit = event => {
    this.props.onAdd(this.state);
    this.setState({ title: "", description: "" });
  };

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };
  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <div className="App-form">
        <div className="Title">
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChangeTitle}
            placeholder="Title"
          ></input>
        </div>
        <div className="Description">
          <textarea
            type="text"
            value={this.state.description}
            onChange={this.handleChangeDescription}
            placeholder="Description"
          ></textarea>
        </div>
        <button class="submitButton" onClick={this.handleSubmit}>登録</button>
      </div>
    );
  }
}

export default ToDoForm;