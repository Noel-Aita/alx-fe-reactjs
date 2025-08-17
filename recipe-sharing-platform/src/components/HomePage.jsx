import React, { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load mock data when component mounts
  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">🍴 Recipe Sharing Platform</h1>

      {/* Grid of Recipes */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {recipes.map((recipe) => (
    <div
      key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>

              {/* View Button (link to recipe detail later) */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                View Recipe
              </button>
            </div>
            <div className="text-center mb-6">
  <Link
    to="/add-recipe"
    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
  >
    + Add New Recipe
  </Link>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
