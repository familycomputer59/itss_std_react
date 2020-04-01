import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
      var items= this.props.items;
    return (
      <div>
        {
            items.map((content,key)=>{
                return  (
                <div  className="ToDoListItem" key = {content.key} onClick = {(e)=>this.props.deleteItem(content.key)}>
                    <div className="ToDoListItem-title">{content.title}</div>
                    <div className="ToDoListItem-description">{content.description}</div>
                </div>
                )
            })
        }
        
      </div>
    );
  }
}

export default ToDoListItem;