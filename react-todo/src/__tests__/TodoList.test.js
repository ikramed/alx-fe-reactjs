import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";

test("renders initial todos", () => {
  render(<TodoList />);
  const todoElements = screen.getAllByText(/Todo/i);
  expect(todoElements.length).toBeGreaterThan(0);
});

test("adds a new todo", () => {
  render(<AddTodoForm />);
  const input = screen.getByPlaceholderText("Add new todo");
  const button = screen.getByText("Add");
  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(button);
  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});
