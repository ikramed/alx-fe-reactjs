import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/add todo/i), { target: { value: 'Test Todo' } });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteBtn = screen.getAllByText(/delete/i)[0];
  fireEvent.click(deleteBtn);
  expect(screen.queryByText('Learn React')).toBeNull();
});
