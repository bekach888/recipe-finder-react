import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";

const RecipeDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error fetching data</p>;

  const meal = data?.meals?.[0];

  const isFavorite = favorites.some((favorite) => favorite.idMeal === meal.idMeal);

  const handleFavoriteToggle = () => {
    if (isFavorite) return;

    setFavorites([...favorites, meal]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-800 p-8 flex flex-col items-center"
    >
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{meal?.strMeal}</h1>
        <img
          src={meal?.strMealThumb}
          alt={meal?.strMeal}
          className="rounded-lg shadow-md w-full max-h-96 object-cover mb-6"
        />

        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Ingredients</h2>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 text-left mt-3">
          {Object.keys(meal)
            .filter((key) => key.includes("strIngredient") && meal[key])
            .map((ingredient, index) => (
              <li key={index} className="mb-2">{meal[ingredient]}</li>
            ))}
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6">Instructions</h2>
        <p className="text-gray-600 dark:text-gray-300 text-left mt-3 leading-relaxed">
          {meal?.strInstructions}
        </p>

        <div className="mt-6">
          {isFavorite ? (
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-full cursor-not-allowed"
              disabled
            >
              Added to favorites
            </button>
          ) : (
            <button
              onClick={handleFavoriteToggle}
              className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-all duration-300"
            >
              Add to favorites
            </button>
          )}
        </div>

        <Link
          to="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default RecipeDetails;
