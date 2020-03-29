import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  
  constructor(){
      super();
      this.state = {todoList: Array()};
  }
  
  addItem(event){
      event.preventDefault();
      var title = event.target[0];
      var description = event.target[1];
      this.setState({todoList: this.state.todoList.concat({title: title.value, description: description.value})});
      title.value = "";
      description.value = "";
  }
  
  deleteItem(event, index){
      this.setState({todoList: this.state.todoList.filter(function(item,i){
          return i!=index;
      })});
  }
    
  render() {
    return (
      <div className="App">
        <form className="App-form" method="post" onSubmit={(event)=>this.addItem(event)}>
            <input type="text" name="title" placeholder="title"/>
            <textarea name="description" rows="5" placeholder="description"/>
            <button type="submit">Submit</button>
        </form>
        <div>
            {
                this.state.todoList.map(function(item, index){
                   return <div onClick={(event)=>this.deleteItem(event, index)}><ToDoListItem id={index} title={item.title} description={item.description} /></div>;
                },this)
            }
        </div>
      </div>
    );
  }
}

export default App;