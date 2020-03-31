import React, { Component } from 'react';
import './App.css';


class Form extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      title: "",
      description: ""
    };
  }
  render(){
      return(
          <form onSubmit={event => this.handleSubmitForm(event)}>
            <p>{this.state.title}</p>   
            <p><textarea value={this.state.description} /></p>
            <button>登録</ button>
      </form>
          );
  }
}


export default Form