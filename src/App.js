import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import SubmitForm from "./SubmitForm.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList : [
        {
          title: "中間テスト",
          description: "4/12  中間テスト"
        },
        {
          title: "Thin先生からの依頼（１）",
          description: "テストの作成"
        },
        {
          title: "Thin先生からの依頼（２）",
          description: "スライドの作成"
        }
      ]
    }
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleAddToDo = (item) => {
    this.state.todoList.push(item);
    this.setState({ todoList: this.state.todoList });
  };

  handleDeleteToDo = index => {
    this.state.todoList.splice(index, 1);
    this.setState({ todoList: this.state.todoList });
  };

  render() {
    let items = this.state.todoList.map((item, index) => {
      let result = ""
      if (item) {
        result = <ToDoListItem 
                  key={index}
                  title={item.title}
                  description={item.description}
                  onClick={() => this.handleDeleteToDo(index)}
                />
      }
      return result
    })

    return (
      <div className="App">
        <div className="App-form">
          <SubmitForm
           onAddToDo={this.handleAddToDo}
          />
        </div>
        <div>
          {items}
        </div>
      </div>
    );
  }
}

export default App;