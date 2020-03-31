import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js";
import './App.css';

var toDoList = [
    {
        title: "宿題", 
        description: "オリエンテーション「１」"
    },
    {
        title: "THIN先生の依頼", 
        description: "テストの作成"
    }
    ];


class App extends Component {
    constructor(props){
        super(props);
        this.state = {toDoList: toDoList};
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
  } 
    
    addItem(todo){
        this.state.toDoList.push(todo);
        this.setState({toDoList: this.state.toDoList });
    }
    
    removeItem(index){
        this.state.toDoList.splice(index, 1)
        this.setState({toDoList: this.state.toDoList })
    }
    
    
    render() {
        return (
          <div className="App">
            <h1> ToDo App </h1>
            <FormTodo addItem={this.addItem} />
            <div>
                {this.state.toDoList.map(function (toDoList, index){
                    return <ToDoListItem
                      key={index}
                      title={toDoList.title}
                      description={toDoList.description}
                      onClick={() => this.removeItem(index)}
                    />
                    
                }.bind(this))}
            </div>
          </div>
        )
    }
}

class FormTodo extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: ""
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeTitle(todo) {
        this.setState({title: todo.target.value})
    }

    handleChangeDescription(todo) {
        this.setState({description: todo.target.value })
    }
        
    handleSubmit(todo) {
        this.props.addItem(this.state)
        this.setState({
          title: "",
          description: ""
        })
        todo.preventDefault();
    }
    
    render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="ToDoForm ">
        <form className="App-form">
            <label>Title: </label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle} />
            <br></br>
            <label>Description: </label>
            <textarea type="text" name="description" value={this.state.description} onChange={this.handleChangeDescription} />
        
          <br></br>
          <input type="submit" value="登録" onClick={this.handleSubmit} />
        </form>
      </form>
    );
  }
}


export default App;