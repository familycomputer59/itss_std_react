import React from 'react';

class TodoListInput extends React.Component {
  render() {
    return (
      <div>
        <input type="text" id="title" name="title" placeholder="Title" />
        <br />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
        />
        <br />
        <button type="button" onClick={this.props.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default TodoListInput;
