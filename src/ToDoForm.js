import React, { Component } from 'react';
import './ToDoForm.css';

class ToDoForm extends Component {
    constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)  
}

handleChangeTitle(event) {
    this.setState({title: event.target.value})
  }
handleChangeDescription(event) {
    this.setState({description: event.target.value})
}
handleSubmit(event) {
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
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
          </div>
          <div>
          <input 
            type="textarea"
            className="description" 
            placeholder="description"
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

export default ToDoForm;