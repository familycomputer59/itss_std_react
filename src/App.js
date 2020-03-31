import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

constructor(props) {
  super(props);
  this.state = {
      items: [],
      title: '',
      description: '',
      submitted: 0
  };
  this.submit = this.submit.bind(this);
  this.titleChange = this.titleChange.bind(this);
  this.descriptionChange = this.descriptionChange.bind(this);
}

submit(event) {
  event.preventDefault();
  let t_items = this.state.items;
  t_items.push(
      {
          title: this.state.title,
          description: this.state.description,
      }
  );
  this.setState(
      {
          items: t_items,
          title: '',
          description: '',
      }
  )
}

titleChange(event){
  this.setState({title : event.target.value});
}

descriptionChange(event){
  this.setState({description : event.target.value});
}

deleteItem = index =>{
  let t_items = this.state.items;
  t_items.splice(index,1);
  this.setState({items : t_items});
}

render() {
  return (
      <div className="App">

          <form className="App-form" onSubmit={this.submit}>
              <div>
                  <input
                      id="title"
                      placeholder="title"
                      onChange={this.titleChange}
                      value={this.state.title}
                  />
                  <textarea
                      id="description"
                      placeholder="description"
                      onChange={this.descriptionChange}
                      value={this.state.description}
                  />
                  <button value="submit">登録</button>
              </div>
          </form>
          <div>
              <ToDoListItem
                  list = {this.state.items}
                  deleteItem = {this.deleteItem}
              />
          </div>
          <div>
              <p>Tutorial: Click 登録 to add a item. Click on a item to delete! </p>
          </div>
      </div>
  );
}
}

export default App;