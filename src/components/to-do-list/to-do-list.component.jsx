import React from 'react';

import ToDoItem from '../to-do-item/to-do-item.component';

import './to-do-list.styles.scss';

const ToDoList = ({ toDoItems, removeItem }) => (
  <div className='to-do-list'>
    {toDoItems.map(toDoItem => (
      <ToDoItem
        key={toDoItem.id}
        id={toDoItem.id}
        title={toDoItem.title}
        description={toDoItem.description}
        removeItem={removeItem}
      />
    ))}
  </div>
);

export default ToDoList;
