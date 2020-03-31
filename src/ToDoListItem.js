	import React, { Component } from 'react';
	import './ToDoListItem.css';

	class ToDoListItem extends Component {
	  render() {
	    return (
	      <div className="ToDoListItem">
	        <div className="ToDoListItem-title"></div>
	        <div className="ToDoListItem-description"></div>
	      </div>
	    );
	  }
	    render() {
	        if (this.props.list) {
	            return this.props.list.map((item, index) => (
	                    <div className="ToDoListItem" onClick={() =>{this.props.deleteHandler(index)}}>
	                        <div className="ToDoListItem-title">{item.title}</div>
	                        <div className="ToDoListItem-description">{item.description}</div>
	                    </div>
	                )
	            );
	        }
	    }
	}

	export default ToDoListItem;