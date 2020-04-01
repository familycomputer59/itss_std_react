import React, { Component } from 'react';
import './ToDoListItem.css';
import { Card } from "antd"

class ToDoListItem extends Component {
  render() {
    return (
      <Card 
        title={this.props.title} 
        headStyle={{ backgroundColor: 'rgb(226, 231, 236)' }} 
        onClick={this.props.onClick} 
        hoverable={true} 
        style={{ width: 400, marginTop: 5 }}
      >
        {this.props.description}
      </Card>
    );
  }
}

export default ToDoListItem;