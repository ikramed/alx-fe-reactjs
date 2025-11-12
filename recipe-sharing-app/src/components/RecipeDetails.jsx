import React from "react";
import { useRecipeStore } from "../recipeStore";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return <p>Recipe not found.</p>;

  const isFavorite = favorites.includes(recipe.id);

  const handleFavorite = () => {
    if (isFavorite) removeFavorite(recipe.id);
    else addFavorite(recipe.id);
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={handleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default RecipeDetails;
