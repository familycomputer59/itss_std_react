import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
          title: "",
          description: ""
        }
    
        this.handleAddTitle = this.handleAddTitle.bind(this)
        this.handleAddDescription = this.handleAddDescription.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
      handleAddTitle = (e) => {
        this.setState({title: e.target.value})
      }
    
      handleAddDescription = (e) => {
        this.setState({description: e.target.value})
      }
    
      handleSubmit = (e) => {
        this.props.addItem(this.state)
        this.setState({
          title: "",
          description: ""
        })
        e.preventDefault();
      }
        
      render() {
        return (
          <form ref="form" onSubmit={this.onSubmit} className="ToDoForm form-inline">
            <form className="App-form">
              <label>
                Title:
                <input type="text" name="title" placeholder='Title' value={this.state.title} onChange={this.handleAddTitle} />
                <br></br>
                Description:
                <input type="text" name="description" placeholder='Description' value={this.state.description} onChange={this.handleAddDescription} />
              </label>
              <br></br>
              <input type="submit" value="登録" onClick={this.handleSubmit} />
            </form>
          </form>
        );
      }
}

export default Form;