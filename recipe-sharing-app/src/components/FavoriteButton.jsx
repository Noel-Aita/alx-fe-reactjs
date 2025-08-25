// src/components/FavoriteButton.jsx
import React from "react";
import { useRecipeStore } from "../recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) removeFavorite(recipeId);
    else addFavorite(recipeId);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded ${
        isFavorite ? "bg-red-500 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {isFavorite ? "Remove Favorite" : "Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
