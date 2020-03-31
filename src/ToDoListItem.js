import React, { Component } from 'react';
import './ToDoListItem.css';
import Form from 'react-bootstrap/Form'

class ToDoListItem extends Component {
  constructor(props){
  	super(props);
  	this.state = {todolist : [
  		{
  			title : 'homework',
  			desc : 'Create app ToDo'
  		}

  		]
  	}

    this.handleTitle = this.handleTitle.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.displayContent = this.displayContent.bind(this);
  }

  handleTitle(event){
  	this.title = event.target.value;
  }

  handleDesc(event){
  	this.desc = event.target.value;
  }

  handleSubmit(event){
  	let newlist = this.state.todolist;
  	
  	newlist.push({ 
  		title: this.title,
  		desc: this.desc
  	 })
  	console.log(newlist)
  	this.setState({todolist: newlist})
  	event.preventDefault();
  }

  handleDelete = index =>{
		let t_items = this.state.todolist;
        t_items.splice(index,1);
		this.setState({todolist : t_items});	
  }

  displayContent(){
  	let content = this.state.todolist.map( todo => (
  			<div class= "ToDoListItem">
	  		  	<div className="ToDoListItem-title">{todo.title}</div>
	  		  	<div className="ToDoListItem-description">{todo.desc}</div>

            	<Form deleteHandler={this.handleDelete}>
					<Form.Control id="submit" type="submit" value="Delete"/>
				</Form>
  		  	</div>
  		));

    return content;
  }

  render() {
    return (
    	<div class="ToDoList">
			{this.displayContent()} 	
	     	<div class="ToDoList-add">
				<Form onSubmit={this.handleSubmit}>
					<Form.Control class="title" type="text" name="title" placeholder="Title" onChange={this.handleTitle}/>
					<Form.Control as="textarea" class="desc" name="desc" placeholder="Description" onChange={this.handleDesc}/>
					<Form.Control id="submit" type="submit" value="Add"/>
				</Form>

			</div>
		</div>
    );
  }
}
export default ToDoListItem;