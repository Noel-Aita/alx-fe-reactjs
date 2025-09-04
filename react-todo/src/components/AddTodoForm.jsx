import { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="border p-2 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded">
        Add
      </button>
    </form>
  );
}
