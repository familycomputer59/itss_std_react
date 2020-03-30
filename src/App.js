import React from "react";
import Addtask from "./components/Addtask";
import Tasklist from "./components/Tasklist";
import TodoTitle from "./components/TodoTile"
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Task: [
        {
          id   :this.createGuid(),
          title: "寝る",
          mieuta: "寝る前に漫画を読む"
        },
        {
          id    :this.createGuid(),
          title: "ITSSを学習",
          mieuta: "平田先生の宿題をする"
        },
        {
          id   :this.createGuid(),
          title: "食堂でご飯を食べる",
          mieuta: "トランさんと一緒に食べる"
        },
        {
          id   :this.createGuid(),
          title: "泳ぎに行きます",
          mieuta: "午前9時にプールで泳ぎに行く"
        }
      ]
    };
    
  }
  createGuid() {
  
    function s4() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + s4() + s4(); // Example => 'e014026082e6237b'
  }
  callbackHandlerFunction = (data) => {
    var Task =this.state.Task;
    data.id = this.createGuid();
    Task.push(data);
    this.setState({
      Task : Task
    })
    
   
}
onDelete =(index) =>{
  var Task = this.state.Task;
  Task.splice(index,1);
  this.setState({
    Task : Task
  });

}
  render() {
    var Task = this.state.Task;
    return (
      <div className="container">
        <TodoTitle></TodoTitle>
        <br />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Addtask handleClickParent={this.callbackHandlerFunction}></Addtask>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Tasklist 
              Task={Task}
              onDelete = {this.onDelete}
              ></Tasklist>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
