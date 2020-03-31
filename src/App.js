import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';
import ToDoForm from './Form.js';

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

  deleteItem = (index) => {
    const itemList = this.state.itemList.filter((item, idx) => index !== idx)
    this.setState({
      itemList
    })
  }

  render() {
    const { itemList } = this.state

    return (
      <div className="App">
        <div>
          <ToDoListItem itemList={itemList} deleteItem={this.deleteItem} />
          <ToDoForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;