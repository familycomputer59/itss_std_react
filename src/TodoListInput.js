import React from 'react';
import './TodoListInput.css';

class TodoListInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.title, this.state.description);
    this.setState({
      title: '',
      description: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleInputChange}
        />
        <br />
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default TodoListInput;
