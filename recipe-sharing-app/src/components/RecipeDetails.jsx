import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const RecipeDetail = () => {
  const { title } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.title === title)
  );

  if (!recipe) {
    return <p style={{ textAlign: "center" }}>Recipe not found 😢</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {recipe.ingredients && (
        <div>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
