import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
    constructor(){
        super();
        this.state = {
            val : "",
            list : [],
        }
        this.updateVal = this.updateVal.bind(this)
    }
    
    add(){
        this.setState({list: this.state.list.concat(this.state.val)})
    }
    
    updateVal(event){
        this.setState({val:event.target.value})
    }
    
  render() {
    return (
        <div className="ToDoListItem">
            <div className="ToDoListItem-title">
                <h3>To Do</h3>
            </div>
            <div className="ToDoListItem-description">
                <div>
                    <input onChange={this.updateVal}/>
                </div>
                <div>
                    <button onClick={()=>this.add()}>Add</button>
                    <ul>{this.state.list.map(item => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    
                </div>

            </div>
        </div>
      
    );
  }
 
}

export default ToDoListItem;