import React from "react";

class Taskitem extends React.Component {

  onDelete = ()=>{
    this.props.onDelete(this.props.index);

  }
  render() {
  var task = this.props.task;
  var index = this.props.index;
    return (
        <tr>
        <td>{index}</td>
        <td>{task.title}</td>
        <td>{task.mieuta}</td>
        <td>
        <button 
        type="button" 
        className="btn btn-danger"
        onClick = {this.onDelete}
        >Delete Task</button>
        </td>
      </tr>
    );
  }
}

export default Taskitem;
