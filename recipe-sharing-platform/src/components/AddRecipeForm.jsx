import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please enter at least two ingredients");
      return;
    }

    setError("");
    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Add New Recipe
        </h2>

        {error && (
          <p className="text-red-500 mb-3 text-sm text-center">{error}</p>
        )}

        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full mb-4 p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Ingredients (comma separated)"
          className="w-full mb-4 p-2 border rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <textarea
          placeholder="Preparation Steps"
          className="w-full mb-4 p-2 border rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
