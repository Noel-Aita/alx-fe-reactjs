// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const HomePage = () => {
  // Get recipes from Zustand store
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">🍴 Recipe Sharing Platform</h1>

      {/* Add New Recipe Button */}
      <div className="text-center mb-8">
        <Link
          to="/add-recipe"
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          + Add New Recipe
        </Link>
      </div>

      {/* Recipes Grid */}
      {recipes.length === 0 ? (
        <p className="text-center text-gray-600">No recipes added yet!</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Recipe Image */}
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
              )}

              {/* Card Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.description || recipe.summary}</p>

                {/* View Button (optional, later link to RecipeDetail) */}
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
