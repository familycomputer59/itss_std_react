import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component{
    constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
        }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeTitle(event) {
    this.setState({title: event.target.value})
    }
    handleChangeDescription(event) {
    this.setState({description: event.target.value})
    }
    handleSubmit(event) {
    // alert('An essay was submitted: ' + this.state.title);
    // event.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({
      title: "",
      description: "",
    })
    }
    render(){
    return (
      <div className="ToDoForm">
          <div>
          <input
            type="text"
            className="title" 
            placeholder="問題"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
          </div>
          <div>
          <input 
            type="textarea"
            className="description" 
            placeholder="詳しく説明してください"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
          </div>
          <div>
          <button 
            className="button" 
            onClick={this.handleSubmit}
          >
            追加
          </button>
          </div>
      </div>
    )
  }
}
export default TodoForm;