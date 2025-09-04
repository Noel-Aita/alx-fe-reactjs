import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import userEvent from "@testing-library/user-event";

describe("TodoList Component", () => {
  // 1️⃣ Test initial render
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  // 2️⃣ Test adding todos
  test("adds a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    await userEvent.type(input, "Test new todo");
    fireEvent.click(button);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  // 3️⃣ Test toggling todos
  test("toggles a todo completed state", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");
  });

  // 4️⃣ Test deleting todos
  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = todo.querySelector("button");

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
