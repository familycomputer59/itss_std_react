import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import ToDoForm from "./ToDoForm.js"
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList:[
                {
                    title: "タイトル１",
                    description: "ディスクリプション１"
                },
                {
                    title: "タイトル２",
                    description: "ディスクリプション２"
                }
            ]
        };
        this.handleAddToDo = this.handleAddToDo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
 
 handleAddToDo(inout) {
    this.state.toDoList.push(inout)
    this.setState({ toDoList: this.state.toDoList })
  }
  
 handleDelete(index) {
    this.state.toDoList.splice(index, 1)
    this.setState({ toDoList: this.state.toDoList })
  }
  
  render() {
      

    return (
      <div className="App">
        <ToDoForm onSubmit={this.handleAddToDo} />
        <div>
          {
            this.state.toDoList.map((ele, index) => (
                <ToDoListItem 
                key={index}
                title={ele.title}
                description={ele.description}
                onClick={() => this.handleDelete(index)}
                />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;