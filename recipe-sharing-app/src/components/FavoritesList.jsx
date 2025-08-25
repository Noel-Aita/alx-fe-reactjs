// src/components/FavoritesList.jsx
import React from "react";
import { useRecipeStore } from "../recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean) // remove null if recipe deleted
  );

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow">
            <h3 className="font-bold mb-1">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
