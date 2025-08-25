// src/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));
