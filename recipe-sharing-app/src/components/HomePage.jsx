// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>

      <Link
        to="/add-recipe"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4 inline-block"
      >
        + Add Recipe
      </Link>

      {/* Search bar */}
      <SearchBar />

      {/* Filtered recipe list */}
      <RecipeList />
    </div>
  );
};

export default HomePage;
