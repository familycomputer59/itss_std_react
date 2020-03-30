import React from "react";
import Taskitem from "./Taskitem";
class Tasklist extends React.Component {
  onDelete = ()=>{
    this.props.onDelete(this.props.index);
    
  }
  render() {
    var Task = this.props.Task;
    var element =Task.map((task,index)=>{
      return <Taskitem 
      key={task.id} 
      index={index} 
      task ={task}
      onDelete = {this.props.onDelete}
      ></Taskitem>
    });

    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Task List</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>{element}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Tasklist;
