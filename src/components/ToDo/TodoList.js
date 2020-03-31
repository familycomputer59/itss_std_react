import React, { useState } from 'react'
import { ToDoListItem } from './TodoListItem'
import { TodoForm } from './TodoForm'
import './style.css'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  return (
    <div className="todo">
      {todos.length > 0 && todos.map(todo => <ToDoListItem key={todo.id} todo={todo} onDeleteTodo={id => setTodos([...todos.filter(el => el.id !== id)])} />)}
      <TodoForm data={todos} onSubmit={data => setTodos([...data])} />
    </div>
  )
}