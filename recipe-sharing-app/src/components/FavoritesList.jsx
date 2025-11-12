import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);

  useEffect(() => {
    console.log("Favorites updated:", favorites);
  }, [favorites]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>💖 Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet 😢</p>
      ) : (
        <ul>
          {favorites.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
