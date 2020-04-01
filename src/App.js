import React, { Component } from 'react';
import './App.css';
import TodoListItem from './TodoListItem';
import TodoListInput from './TodoListInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { title: 'ITSS1', description: 'Submit React Todo App'},
        { title: '日本語8', description: 'Finish task 2'}
      ]
    };
  }

  onRemove(index) {
    const newItems = this.state.items.slice();
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  }

  onSubmit(title, description) {
    const newItems = this.state.items.slice();
    newItems.push({ title, description });
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div className="App">
        <TodoListInput
          onSubmit={(title, description) => this.onSubmit(title, description)}
        />
        <div className="item-group">
          {this.state.items.map((element, index) => (
            <TodoListItem
              key={index}
              item={element}
              onRemove={() => this.onRemove(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
