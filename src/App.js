import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';
import ToDoForm from './ToDoForm.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemList: []
    }
  }

  addItem = (item) => {
    const { itemList } = this.state
    itemList.push(item)
    this.setState({
      itemList
    })
  }

  render() {
    const { itemList } = this.state

    return (
      <div className="App">
        <div>
          <ToDoListItem itemList={itemList} />
          <ToDoForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;