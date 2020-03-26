import React, { Component } from 'react';
import './ToDoForm.css';

class ToDoForm extends Component {
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
    this.props.onAddTodo(this.state)
    this.setState({
      title: "",
      description: ""
    })
    event.preventDefault();
  }
    
  render() {
    return (
      <div className="ToDoForm form-group">
        <div className="ToDoForm-title pb-2">
          <input 
            className="form-control"
            type="text"
            value={this.state.title} 
            onChange={this.handleChangeTitle} 
            placeholder="Title"
          />
        </div>
        <div className="ToDoForm-description pb-2">
          <textarea 
            className="form-control"
            type="text"
            value={this.state.description} 
            onChange={this.handleChangeDesc} 
            placeholder="Description"
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-success mb-4"
          onClick={this.handleSubmit}
        >
          登録
        </button>
      </div>
    );
  }
}

export default ToDoForm;
