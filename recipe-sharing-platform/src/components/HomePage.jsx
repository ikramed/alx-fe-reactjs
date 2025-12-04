import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
