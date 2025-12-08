import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  const items = screen.getAllByTestId("todo-item");
  expect(items.length).toBe(2);
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByTestId("todo-input");
  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.submit(input);
  const items = screen.getAllByTestId("todo-item");
  expect(items.length).toBe(3);
});

test("toggles a todo", () => {
  render(<TodoList />);
  const item = screen.getAllByTestId("todo-item")[0];
  fireEvent.click(item);
  expect(item).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButtons = screen.getAllByText("Delete");
  fireEvent.click(deleteButtons[0]);
  const items = screen.getAllByTestId("todo-item");
  expect(items.length).toBe(1);
});
