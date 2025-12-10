// src/TodoList.jsx
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', done: false },
    { text: 'Build Todo App', done: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo('');
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTodo(index)}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
