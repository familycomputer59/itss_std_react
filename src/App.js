import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[{    //todo のリスト
        title: "",
        description: ""
      }],
      newTitle: "",
      newDescription:"",
      count: 0    //todo の数
    }
  }

  saveTitle(event){
    this.setState({
      newTitle: event.target.value
    })
  }

  saveDescription(event){
    this.setState({
      newDescription: event.target.value
    })
  }

  createNewToDo(event){
    event.preventDefault()
    const todos = this.state.todos.slice(0, this.state.count + 1);
    const count = this.state.count + 1;
    
    this.setState({
      todos: todos.concat([{
        title: this.state.newTitle,
        description: this.state.newDescription
      }]),
      count: count
    })
  }

  removeTodo(i){
    const todos = this.state.todos.slice(0, this.state.count+1);
    todos.splice(i,1);
    const count = this.state.count-1;
    this.setState({
      todos: todos,
      count: count
    })
  }

  render() {
    let listTodos =[];
      for(let i=1; i<this.state.count+1; i++){
        listTodos = listTodos.concat(<ToDoListItem
            title={this.state.todos[i].title}
            description={this.state.todos[i].description} 
            onClick={()=>this.removeTodo(i)}
        />)
      }
    return (
      <div className="App">
        <form className="App-form"
              onSubmit={(event)=>this.createNewToDo(event)}
        >
          <input id="input_title" 
                type="text" 
                value={this.state.title} 
                placeholder="title"
                onChange={(event)=>this.saveTitle(event)}
                ></input>
          <textarea id="input_description" 
                    type="text" 
                    rows="2" 
                    placeholder="description"
                    onChange={(event)=>this.saveDescription(event)}
                    ></textarea>
          <button type ="submit">登録</button>
        </form>
        <div>
          {listTodos}
        </div>
      </div>
    );
  }
}

export default App;