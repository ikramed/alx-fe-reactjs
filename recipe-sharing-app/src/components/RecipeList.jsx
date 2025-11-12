import React, { useEffect } from "react";
import { useRecipeStore } from "../recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const { recipes, filteredRecipes, filterRecipes, searchTerm } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const recipesToShow = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      <SearchBar />
      <ul>
        {recipesToShow.length > 0 ? (
          recipesToShow.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
