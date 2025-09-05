import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    screen.getByText("Learn React");
    screen.getByText("Build a Todo App");
  });

  test("adds a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    await userEvent.type(input, "Test Todo");
    fireEvent.click(button);

    screen.getByText("Test Todo");
  });

  test("toggles a todo completed state", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);
    expect(todo.style.textDecoration).toBe("line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = todo.querySelector("button");

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).toBeNull();
  });
});
