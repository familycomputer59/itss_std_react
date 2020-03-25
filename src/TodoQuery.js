import React, { Component } from 'react';

class TodoQuery extends Component {
  state = {
    title: '',
    description: ''
  }
  addTodo = () => {
    this.props.addTodo(this.state.title, this.state.description)
  }

  render(){
    return (
      <div>
          <input type="text" name="title" placeholder="title"
          onChange = {e => this.setState({title: e.target.value})}/><br></br>
          <textarea name="description" placeholder="description"
          onChange = {e => this.setState({description: e.target.value})}></textarea><br></br>
          <button onClick={this.addTodo}>登録</button>
        
      </div>
    )
  }
}

export default TodoQuery;