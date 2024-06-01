import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, editTodo, removeTodo, toggleComplete }) => {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};
