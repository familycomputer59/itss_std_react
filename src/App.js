import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js";
import ToDo from "./ToDo.js";
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            items:[],
            newItem:{
                key:'',
                title:'',
                description:''
            }
        }
        this.getDataFromToDo = this.getDataFromToDo.bind(this);
    }
    getDataFromToDo = async(title,des)=>{
        await this.setState({newItem:{
            key:Date.now(),
            title:title,
            description:des
        }});
        await this.setState({
            items :[...this.state.items,this.state.newItem]
        });
    }
   deleteItem = async(key)=>{
       const filterItems = this.state.items.filter(item=>item.key!==key);
       await this.setState({items:filterItems});
   }
  render() {
    return (
      <div className="App">
        <div className = "App-form">
            <ToDo newItem = {this.getDataFromToDo}></ToDo>
        </div>
        <div>
          <ToDoListItem items = {this.state.items} deleteItem = {this.deleteItem}></ToDoListItem>
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;