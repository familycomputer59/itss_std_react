import React, { useState } from 'react'
import './style.css'

export const TodoForm = ({ data, onSubmit }) => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

  return (
    <div className="todo-form">
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
      {
        !title && <p style={{ color: 'red' }}>Title is required</p>
      }
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description}
        name="description" onChange={e => setDescription(e.target.value)} />
      {
        !description && <p style={{ color: 'red' }}>Description is required</p>
      }
      <button disabled={!title || !description} onClick={() => {
        onSubmit([
          ...data,
          {
            id: Math.random().toString(36).substr(2, 9),
            title,
            description
          }
        ])
        setTitle('')
        setDescription('')
      }} >Submit</button>
    </div>
  )
}