// src/components/RecipeList.jsx
import React from "react";
import { useRecipeStore } from "../recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-2">{recipe.title}</h2>
          <p>{recipe.description}</p>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
