import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

export const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) return <p>No recipes yet...</p>;

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <p>{r.description}</p>
          <Link to={`/recipes/${r.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};
