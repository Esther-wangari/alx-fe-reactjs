import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients = "Please enter at least 2 ingredients, separated by commas";
    if (!instructions.trim() || instructions.split(".").length < 2)
      newErrors.instructions = "Please enter at least 2 steps, separated by periods";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // For now, just log the data
      console.log({
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        instructions: instructions.split(".").map((s) => s.trim()).filter(Boolean),
      });

      alert("Recipe submitted successfully!");

      // Clear the form
      setTitle("");
      setIngredients("");
      setInstructions("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="e.g., 200g spaghetti, 100g bacon, 2 eggs"
            rows={3}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Instructions (period separated)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full border ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            } p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="e.g., Cook pasta. Fry bacon. Mix together."
            rows={4}
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
