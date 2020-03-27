import React, { Component } from 'react';
import ToDoListItem from './components/ToDoListItem.js';
import './App.css';
import FormCreateitems from './components/FormCreateitems.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { title: 'ド・ドゥック・ホアン', description: '20161655' },
        { title: '平田ー先生', description: '楽しい人です' }
      ]
    };
  }

  pushItems = (item) => {
    this.setState({ items: [...this.state.items, item] });
  };

  deleteItems = (index) => {
    this.setState({
      items: this.state.items.filter((_, i) => i !== index)
    });
  };

  render() {
    return (
      <div className='App'>
        <div>
          <FormCreateitems pushItems={this.pushItems} />
          <hr />
          {this.state.items.map((item, index) => (
            <div key={index} onClick={() => this.deleteItems(index)}>
              <ToDoListItem items={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
