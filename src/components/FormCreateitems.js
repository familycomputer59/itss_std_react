import React, { Component } from 'react';
import './FormCreateitems.css';

class FormCreateitems extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '' };
  }

  handleSubmit = (event) => {
    this.props.pushItems(this.state);
    this.setState({ title: '', description: '' });
    event.preventDefault();
  };

  render() {
    return (
      <form className='FormItem' onSubmit={this.handleSubmit}>
        <div className='form_w'>
          <input
            style={{ width: '301px' }}
            value={this.state.title}
            type='text'
            placeholder='Title'
            onChange={(event) => this.setState({ title: event.target.value })}
          />
        </div>

        <div className='form_w'>
          <textarea
            style={{ width: '299px' }}
            value={this.state.description}
            type='text'
            placeholder='Description'
            onChange={(event) => this.setState({ description: event.target.value })}
          />
        </div>

        <div className='form_w'>
          <input style={{ width: '305px' }} type='submit' value='登録' />
        </div>
      </form>
    );
  }
}

export default FormCreateitems;
