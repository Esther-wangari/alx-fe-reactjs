import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (recipe) =>
    set(state => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id),
      filteredRecipes: state.recipes.filter(recipe => recipe.id !== id),
    })),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
