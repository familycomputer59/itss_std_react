import React, { Component } from 'react';
import './ToDoForm.css';

const textareaLineHeight = 26;

class ToDoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
    }

    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this)
    this.handleOnChangeDescription = this.handleOnChangeDescription.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(e) {
    this.props.onSubmit(this.state)
    this.setState({
      title: "",
      description: "",
    })
  }

  handleOnChangeDescription(e) {
    this.setState({description: e.target.value})
    e.target.rows = ~~(e.target.scrollHeight / textareaLineHeight)
  }

  handleOnChangeTitle(e) {
    this.setState({title: e.target.value})
    e.target.rows = ~~(e.target.scrollHeight / textareaLineHeight)
  }

  render() {
    return (
      <div className="ToDoForm">
        <div className="ToDoForm-control">
          <textarea 
            className="title" 
            rows="1" 
            placeholder="タイトル"
            value={this.state.title}
            onChange={this.handleOnChangeTitle}
          />
        </div>
        <div className="ToDoForm-control">
          <textarea 
            className="description" 
            rows="3"　
            placeholder="内容"
            value={this.state.description}
            onChange={this.handleOnChangeDescription}
          />
        </div>
        <div className="ToDoForm-control">
          <button 
            className="button" 
            onClick={this.handleOnSubmit}
          >
            追加
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoForm;