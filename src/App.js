import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      todoList: []
    }
  }
  render() {
    return (
      <div className="App">
        <form className = "App-form" onSubmit={event => {
          let todoList1 = this.state.todoList;
          todoList1.push({
            title: this.state.title,
            description: this.state.description
          });
          this.setState({todoList: todoList1, title: "", description: ""});
          event.preventDefault();
            
        }}>
          <input placeholder= "Title" value={this.state.title}
                 onChange={event => this.setState({title: event.target.value})}/>
          <textarea placeholder = "Description" value={this.state.description}
                    onChange={event => this.setState({description: event.target.value})}/>
          <button>登録</button>
          
        
        </form>
        <div>
          {
            this.state.todoList.map((item, i) => {
              return <ToDoListItem title={item.title} description={item.description} onItemClick={() => {
                let todoList1 = this.state.todoList.filter((item, index) => index !== i);
                this.setState({todoList: todoList1});
              }}/>
            })
          }
        </div>
       </div> 
    );
  }
}

export default App;