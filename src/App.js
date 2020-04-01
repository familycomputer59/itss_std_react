import React from 'react';
import './App.css';
import TodoListItem from './TodoListItem';
import TodoListInput from './TodoListInput';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { title: 'Learn', description: 'Learn English'},
        { title: 'Eat', description: 'Eat banh my'},
        { title: 'Sleep', description: 'Sleep 8 hours'}
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
        <div className="item-group">
          {this.state.items.map((element, index) => (
            <TodoListItem
              key={index}
              item={element}
              onRemove={() => this.onRemove(index)}
            />
          ))}
        </div>
        <TodoListInput
          onSubmit={(title, description) => this.onSubmit(title, description)}
        />
      </div>
    );
  }
}

export default App;
