import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [], 
  recommendations: [], 

  
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe],
    })),

  
  deleteRecipe: (title) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.title !== title),
      filteredRecipes: state.filteredRecipes.filter((r) => r.title !== title),
      favorites: state.favorites.filter((r) => r.title !== title),
    })),

  
  updateRecipe: (title, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.title === title ? { ...r, ...updatedRecipe } : r
      ),
      filteredRecipes: state.filteredRecipes.map((r) =>
        r.title === title ? { ...r, ...updatedRecipe } : r
      ),
    })),

  
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),


  toggleFavorite: (recipe) =>
    set((state) => {
      const exists = state.favorites.find((r) => r.title === recipe.title);
      return exists
        ? { favorites: state.favorites.filter((r) => r.title !== recipe.title) }
        : { favorites: [...state.favorites, recipe] };
    }),

 
  generateRecommendations: () => {
    const { recipes } = get();
    const random = recipes.sort(() => 0.5 - Math.random()).slice(0, 3);
    set({ recommendations: random });
  },
}));
