import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";

const Home = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); 
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
  );

  useEffect(() => {
    console.log("searchQuery:", searchQuery);
  }, [searchQuery]);

  const handleSearch = () => {
    if (query.trim() !== "") {
      setSearchQuery(query);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value); 

    if (e.target.value === "") {
      setSearchQuery("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      handleSearch();
    }
  };

  const noResults = !data?.meals;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 relative bg-gray-100 dark:bg-gray-800 dark:text-white"
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">Recipe Finder</h1>

      <div className="flex justify-center items-center mb-6 space-x-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for a meal..."
            value={query}
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 pr-10 focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSearch} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            <FaSearch className="w-5 h-5" /> 
          </button>
        </div>

        <Link
          to="/favorites"
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          <FaHeart className="w-5 h-5" /> 
        </Link>
      </div>

      {loading && <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>}
      {error && <p className="text-center text-red-600 dark:text-red-400">Error fetching data</p>}

      {noResults && (
        <p className="text-center text-gray-600 dark:text-gray-300">Nothing found</p>
     )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.meals?.map((meal) => (
          <motion.div
            key={meal.idMeal}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-xl transition-all duration-300 dark:bg-gray-700 dark:text-white"
          >
            <Link to={`/recipe/${meal.idMeal}`}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{meal.strMeal}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
