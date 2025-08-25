// src/components/RecipeDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import EditRecipeForm from "./EditRecipeForm";

const RecipeDetails = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found!</p>;

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate("/"); // Go back to homepage after deleting
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />

      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
      >
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
