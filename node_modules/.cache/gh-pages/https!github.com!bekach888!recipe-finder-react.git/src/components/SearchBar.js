import { FaSearch } from "react-icons/fa";

const SearchBar = ({ query, handleInputChange, handleSearch, handleKeyDown }) => {
  return (
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
  );
};

export default SearchBar;
