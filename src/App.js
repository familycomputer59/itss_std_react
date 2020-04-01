import React, {Component} from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      toDoList: []
    }
  }

  render() {
    return (
      <div className="App">
        <form className="App-form" onSubmit={event => {
          let toDoList = this.state.toDoList;
          toDoList.push({
            title: this.state.title,
            description: this.state.description
          });
          this.setState({toDoList: toDoList, title: "", description: ""});
          event.preventDefault();
        }}>
          <input placeholder="title" value={this.state.title}
                 onChange={event => this.setState({title: event.target.value})}/>
          <textarea placeholder="description" value={this.state.description}
                    onChange={event => this.setState({description: event.target.value})}/>
          <button>Add</button>
        </form>
        <div>
          {
            this.state.toDoList.map((item, i) => {
              return <ToDoListItem key={i} title={item.title} description={item.description} onItemClick={() => {
                let toDoList = this.state.toDoList.filter((item, index) => index !== i);
                this.setState({toDoList: toDoList});
              }}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;