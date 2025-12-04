import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Steps are required";

    if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Enter at least two ingredients";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
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

        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full mb-2 p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm mb-2">{errors.title}</p>}

        <textarea
          placeholder="Ingredients (comma separated)"
          className="w-full mb-2 p-2 border rounded"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm mb-2">{errors.ingredients}</p>
        )}

        <textarea
          placeholder="Preparation Steps"
          className="w-full mb-2 p-2 border rounded"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && <p className="text-red-500 text-sm mb-2">{errors.steps}</p>}

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
