import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🌟 Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available 😅</p>
      ) : (
        <ul>
          {recommendations.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;
