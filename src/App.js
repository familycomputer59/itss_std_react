import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      toDoList: [
        {
            title: "テスト",
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
    this.setState({ item: this.state.item });
  }

  handleDesEdit(e) {
    this.state.item.description = e.target.value;
    this.setState({ item: this.state.item });
  }

  handleDeleteItem(index) {
    this.state.toDoList.splice(index, 1);
    this.setState({ toDoList: this.state.toDoList });
  }

  handleAddItem() {
    //this.state.toDoList.push(this.state.item);
    this.setState({ toDoList: [...this.state.toDoList, this.state.item] }, () => {
        localStorage.setItem("toDoList", JSON.stringify(this.state.toDoList))
    });
  }

  handleSubmit(e) {
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
    return (
      <div className="App">
        <div>
          <ToDoListItem entries={this.state.toDoList} 
          />
        </div>
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input name="title" type="text" value={this.state.item.title} onChange={(e)=>this.handleTitleEdit(e)}  placeholder="Title"/><br />
            <input name="title" type="text" value={this.state.item.description} onChange={(e)=>this.handleDesEdit(e)} placeholder="Description"/><br />
            <button type="submit">登録</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
