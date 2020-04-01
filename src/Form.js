import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        description: ""
      };

      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.onadd(this.state)
        this.setState({
          title: "",
          description: ""
        })
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInput}  placeholder="Title"/>
          <textarea type="text" name="description" value={this.state.description} onChange={this.handleInput} placeholder="Description"/>
          <button type="submit">登録</button>
        </form>
      );
    }
  }

  export default Form; 
