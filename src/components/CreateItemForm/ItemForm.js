import React, { Component } from 'react';
import './ItemForm.css';

class CreateItemForm extends Component {
  render() {
    return (
        <form onSubmit={this.props.onFormSubmit} className="App-form">
        <input
          type="text"
          required
          placeholder="Title"
          onChange={this.props.onChange}
          name="title"
          value={this.props.title}
        />
        <input
          type="text"
          required
          placeholder="Description"
          onChange={this.props.onChange}
          name="description"
          value={this.props.description}
        />
        <button type="submit">登録</button>
      </form>
    );
  }
}

export default CreateItemForm;