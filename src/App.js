import React from 'react';
import './App.css';
import TodoListItem from './TodoListItem';
import TodoListInput from './TodoListInput';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { title: 'Learn', content: 'Learn English', isDone: true },
        { title: 'Eat', content: 'Eat banh my', isDone: false },
        { title: 'Sleep', content: 'Sleep 8 hours', isDone: true }
      ]
    };
  }

  onChange(index) {
    const newItems = this.state.items.slice();
    newItems[index].isDone = !newItems[index].isDone;
    this.setState({
      items: newItems
    });
    console.log(this.state.items[index]);
  }

  onRemove(index) {
    const newItems = this.state.items.slice();
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  }

  onSubmit() {
  }
  render() {
    return (
      <div className="App">
        <div className="item-group">
          {this.state.items.map((element, index) => (
            <TodoListItem
              key={index}
              item={element}
              onChange={() => this.onChange(index)}
              onRemove={() => this.onRemove(index)}
            />
          ))}
          <TodoListInput onSubmit={() => this.onSubmit()} />
        </div>
      </div>
    );
  }
}

export default App;
