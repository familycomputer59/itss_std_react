import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      description:'',
      todolist: []
    }
  }
  render() {
    return (
      <div className="App">
        <form className="App-form" onSubmit={event =>{
          let todolist = this.state.todolist;
          todolist.push({
            title: this.state.title,
            description: this.state.description
          });
          this.setState({todolist: todolist, title: "", description: ""});
         
        }}>
          <input placeholder = "title" value = {this.state.title} onChange = {event => this.setState({title: event.target.value})}></input>
          <input placeholder = "description" value = {this.state.description} onChange = {event => this.setState({description: event.target.value})}></input>
          <button>Submit</button>
        </form>
        <div>
          {
            this.state.todolist.map((item, i) => {
              return <ToDoListItem key={i} title={item.title} description={item.description} onItemClick={() => {
                let todolist = this.state.todolist.filter((item, index) => index !== i);
                this.setState({todolist: todolist});
              }}/>
            })
          }
          
        </div>
      </div>
    );
  }
}

export default App;

