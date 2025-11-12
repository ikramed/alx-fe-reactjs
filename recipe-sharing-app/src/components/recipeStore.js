import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe]
  })),

  deleteRecipe: (title) => set((state) => ({
    recipes: state.recipes.filter((r) => r.title !== title),
    filteredRecipes: state.filteredRecipes.filter((r) => r.title !== title)
  })),

  editRecipe: (oldTitle, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((r) => r.title === oldTitle ? updatedRecipe : r),
    filteredRecipes: state.filteredRecipes.map((r) => r.title === oldTitle ? updatedRecipe : r)
  })),

  setSearchTerm: (term) => set((state) => {
    const filtered = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),
}));
