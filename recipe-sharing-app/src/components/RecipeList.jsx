import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found 😢</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to={`/recipe/${recipe.title}`}>👁️ View</Link>
            <button onClick={() => toggleFavorite(recipe)}>💖 Favorite</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
