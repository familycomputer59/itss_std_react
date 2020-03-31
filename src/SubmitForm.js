import React, { Component } from 'react';

class SubmitForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        description: ""
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }
  
    handleSubmit(event) {
        this.props.onAddToDo(this.state)
        this.setState({
          title: "",
          description: ""
        })
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}  placeholder="Title"/>
          <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description"/>
          <button type="submit">登録</button>
        </form>
      );
    }
  }

  export default SubmitForm;