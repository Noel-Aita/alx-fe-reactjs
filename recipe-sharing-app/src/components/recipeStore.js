// src/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  //add a recipe
  addRecipe: (recipe) => set((state) => 
    ({ recipes: [...state.recipes, recipe] })),

   // Update an existing recipe by id
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  // Set search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes based on searchTerm
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
