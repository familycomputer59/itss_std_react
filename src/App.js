import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
    
  constructor() {
    super();
    this.state = {
      toDoList: [
        {
          title: "Me",
          description: "Stay at home"
        },
        {
          title: "You",
          description: "Stay at home"
        },
      ],
      item: {
          title: '',
          description: '',
      },
    }
    this.handleTitleEdit = this.handleTitleEdit.bind(this);
    this.handleDesEdit = this.handleDesEdit.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }    
  
  handleTitleEdit(e) {
    this.state.item.title = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleDesEdit(e) {
    this.state.item.description = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleAddItem() {
    this.state.toDoList.push(this.state.item);
  }
  
  handleDeleteItem(index) {
    this.state.toDoList.splice(index, 1);
    this.setState({toDoList: this.state.toDoList});
  }
  
  onSubmit(e) {
    this.handleAddItem();
    e.preventDefault();
    this.setState({
        item: {
            title: '',
            description: ''
        }
    })
  }
    
  render() {
      
    const items = this.state.toDoList.map((item,index) => {
        return (
            <ToDoListItem
                key = {index}
                title = {item.title}
                description = {item.description}
                handleDelete = {()=>this.handleDeleteItem(index)}
            />
        )
    });
        
      
    return (
      <div className="App">
        
        <div>
          <form className="App-form" onSubmit={(e)=>this.handleSubmit(e)}>
            <input 
              id="title"    
              type="text"
              value={this.state.item.title}
              onChange={(e)=>this.handleTitleEdit(e)}
              placeholder="Title"
              required
            />
            <textarea
              id="des"
              value={this.state.item.description}
              onChange={(e)=>this.handleDesEdit(e)}
              placeholder="Description"
            />
            <button type="submit"
              onClick={(e)=>this.onSubmit(e)}
            >
             Add
            </button>
          </form>
        </div>
        
        <div>
          {items}
        </div>
        
      </div>
    );
  }
}

export default App;
