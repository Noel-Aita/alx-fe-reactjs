// src/App.jsx
import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList"
import { useRecipeStore } from "./recipeStore";

const App = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  console.log("Current recipes:", recipes);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🍴 Recipe App</h1>

      {/* Add Recipe Form */}
      <AddRecipeForm />

      {/* Recipes List */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-center text-gray-600">No recipes added yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="border p-4 rounded shadow">
              <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
