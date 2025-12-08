import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";

test("renders initial todos", () => {
  render(<TodoList />);
  const todoElements = screen.getAllByText(/Learn React|Build a Todo App/i);
  expect(todoElements.length).toBeGreaterThan(0);
});

test("adds a new todo", () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  const input = getByPlaceholderText("Add new todo");
  const button = getByText("Add");
  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(button);
  expect(getByText("Test Todo")).toBeInTheDocument();
});
