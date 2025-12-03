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
      <p className="text-gray-700">{recipe.summary}</p>
    </div>
  );
}

export default RecipeDetail;
