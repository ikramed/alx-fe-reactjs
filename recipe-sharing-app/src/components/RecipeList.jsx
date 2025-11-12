import React from "react";
import { useRecipeStore } from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p style={{ textAlign: "center" }}>No recipes found 😢</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to={`/recipe/${recipe.title}`}>👁️ View</Link>
            <Link to={`/edit/${recipe.title}`}>✏️ Edit</Link>
            <DeleteRecipeButton title={recipe.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
