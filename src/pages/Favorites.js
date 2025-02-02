import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [showPopup, setShowPopup] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState(null);

  const handleDelete = (recipe) => {
    setShowPopup(true);
    setRecipeToDelete(recipe);
  };

  const confirmDelete = () => {
    if (recipeToDelete) {
      setFavorites(favorites.filter((item) => item.idMeal !== recipeToDelete.idMeal));
    }
    setShowPopup(false);
    setRecipeToDelete(null);
  };

  const cancelDelete = () => {
    setShowPopup(false);
    setRecipeToDelete(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">No favorites yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transform hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/recipe/${recipe.idMeal}`}>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{recipe.strMeal}</h2>
                </div>
              </Link>

              <button
                onClick={() => handleDelete(recipe)}
                className="bg-red-600 text-white p-2 rounded-full absolute top-2 right-2 hover:bg-red-700 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>


      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Are you sure you want to delete this recipe?
            </h2>
            <div className="flex justify-around">
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
