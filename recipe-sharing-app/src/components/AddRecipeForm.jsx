// src/components/AddRecipeForm.jsx
import React, { useState } from "react";               // Correct import for useState
import { useRecipeStore } from "../recipeStore"; // Fixed typo in store import

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // Local state for input fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description) return; // Prevent adding empty recipes

    // Add recipe to Zustand store
    addRecipe({ id: Date.now(), title, description });

    // Reset form fields
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add a New Recipe</h2>
      
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }}
      />

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
