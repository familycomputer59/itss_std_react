import React from 'react';
import './to-do-item.styles.scss';

const ToDoItem = ({ id, title, description, removeItem }) => (
  <div className='item'>
    <div
      className='remove-button'
      onClick={() => {
        removeItem(id);
      }}
    >
      &#10005;
      <span className='tooltip-text'>削除</span>
    </div>
    <div className='title'>{title}</div>
    <div className='description'>{description}</div>
  </div>
);

export default ToDoItem;
