import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import Form from "./Form.js"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      List : [
        {
          title: "中間テスト",
          description: "4/12  中間テスト"
        },
        {
          title: "Thin先生からの依頼（１）",
          description: "テストの作成"
        },
        {
          title: "Thin先生からの依頼（２）",
          description: "スライドの作成"
        }
      ]
    }
    this.deleteitems = this.deleteitems.bind(this);
    this.additems = this.additems.bind(this);
  }

  additems = (item) => {
    this.state.List.push(item);
    this.setState({ List: this.state.List });
  };

  deleteitems = index => {
    this.state.List.splice(index, 1);
    this.setState({ List: this.state.List });
  };

  render() {
    let items = this.state.List.map((item, index) => {
      let result = ""
      if (item) {
        result = <ToDoListItem 
                  key={index}
                  title={item.title}
                  description={item.description}
                  Click={() => this.deleteitems(index)}
                />
      }
      return result
    })

    return (
      <div className="App">
        <div className="App-form">
          <Form onadd={this.additems}/>
        </div>
        <div>
          {items}
        </div>
      </div>
    );
  }
}

export default App;