import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task, setIsEditing }) => {
  const [value, setValue] = useState(task.task);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      setError('Task cannot be empty');
    } else {
      editTodo(value, task.id);
      setIsEditing(false);
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">Update Task</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};
