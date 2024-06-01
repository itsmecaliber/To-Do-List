import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      setError('Task cannot be empty');
    } else {
      addTodo(task);
      setTask('');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
        placeholder="Add a new task"
      />
      <button type="submit" className="todo-btn">Add Task</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};
