import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[
      {
        title:'Todo1',
        description:'Do1',},
      {
        title:'Todo2',
        description:'Do2',},
      ],
      nextlist:{
      }
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.removeItem=this.removeItem.bind(this);
  }
  
  onChange(event){
    var target = event.target;
    var name=target.name;
    var value=target.value;
    this.setState({
      nextlist:{...this.state.nextlist,[name]:value}
    });
  }
  onSubmit(event)
  {
    event.preventDefault();
    this.setState({
      list:[...this.state.list,this.state.nextlist]
    });
  }
  removeItem(i)
  {
    var arr=this.state.list;
    arr.splice(i,1);
    
    this.setState({list:arr});
  }
  render() {
    let listmap=this.state.list.map((current,i)=>{
      return <ToDoListItem title={current.title} description={current.description} id={i} removeItem={this.removeItem}/>
    })
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.onSubmit}>
          <textarea type="text" name="title" placeholder="Title" onChange={this.onChange}/>
          <textarea type="text" name="description" placeholder="Description" onChange={this.onChange}/>
          <input type="submit" value="Submit"/>
        </form>
        <div>
          {listmap}
        </div>
      </div>
    );
  }
}

export default App;
