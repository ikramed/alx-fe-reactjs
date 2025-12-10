// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  });

  test('can add a todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('can toggle a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const todos = screen.getAllByText('Delete'); 
    const firstDeleteButton = todos[0]; 
    const firstTodo = screen.getByText('Learn React');
    fireEvent.click(firstDeleteButton);
    expect(firstTodo).not.toBeInTheDocument();
  });
});
