import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const editTodo = (task, id) => {
    const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, task } : todo));
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sort === 'asc') return a.task.localeCompare(b.task);
    return b.task.localeCompare(a.task);
  });

  return (
    <div className="App">
      <h1>  To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="controls">
        <label>
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
        <label>
          Sort:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <TodoList
        todos={sortedTodos}
        editTodo={editTodo}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
