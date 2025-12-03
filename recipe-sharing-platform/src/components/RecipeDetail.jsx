import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg mb-4"/>
      <p className="text-gray-700 mb-4">{recipe.summary}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions.map((step, idx) => (
          <li key={idx} className="mb-1">{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
