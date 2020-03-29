import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
    
  constructor() {
    super();
    this.state = {
      toDoList: [
        {
          title: "中間テスト",
          description: "4/12  中間テスト"
        },
        {
          title: "Thin先生からの依頼",
          description: "テストの作成"
        },
      ],
      item: {
          title: '',
          description: '',
      },
    }
  }    
  
  handleTitleEdit(e) {
    this.state.item.title = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleDesEdit(e) {
    this.state.item.description = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleAddList() {
    this.state.toDoList.push(this.state.item);
    this.setState({toDoList: this.state.toDoList});
  }
  
  handleSubmit(e) {
    this.handleAddList();
    e.preventDefault();
    this
  }
    
  render() {
      
    function printList(toDoList) {
        let items = toDoList.map((item,index) => {
            return (
                <ToDoListItem
                  key = {index}
                  title = {item.title}
                  description = {item.description}
                />
              )
        });
        return items;
    }
      
    return (
      <div className="App">
        
        <div>
          <form className="App-form" onSubmit={(e)=>this.handleSubmit(e)}>
            <input 
              id="title"    
              type="text"
              onChange={(e)=>this.handleTitleEdit(e)}
              placeholder="Title"
            />
            <textarea
              id="des"
              type="text"
              onChange={(e)=>this.handleDesEdit(e)}
              placeholder="Description"
            />
            <button type="submit">
                登録
            </button>
          </form>
        </div>
        
        <div>
          {printList(this.state.toDoList)}
        </div>
        
      </div>
    );
  }
}

export default App;