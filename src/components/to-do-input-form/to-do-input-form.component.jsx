import React from 'react';

import './to-do-input-form.styles.scss';

const ToDoInputForm = ({ handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className='to-do-input-form'>
    <input
      className='title'
      name='title'
      type='text'
      placeholder='Title'
      onChange={handleChange}
      required
    />
    <textarea
      className='description'
      name='description'
      type='text'
      placeholder='Description'
      onChange={handleChange}
      required
    />
    <button className='button' type='submit'>
      登録
    </button>
  </form>
);

export default ToDoInputForm;
