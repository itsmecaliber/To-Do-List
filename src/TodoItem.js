import React, { useState } from 'react';
import { EditTodoForm } from './EditTodoForm';

export const TodoItem = ({ todo, editTodo, removeTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={`TodoItem ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <EditTodoForm editTodo={editTodo} task={todo} setIsEditing={setIsEditing} />
      ) : (
        <>
          <span onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};
