import { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./router/Approuter"
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    document.body.style.overflow = "visible";
    document.documentElement.style.overflow = "visible";
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Router>
      <button
        onClick={toggleTheme}
        className="p-4 bg-blue-500 text-white rounded-full z-50"
        style={{
          position: "absolute",
          top: "4%",         
          right: "4%",       
          zIndex: 9999,      
        }}
      >
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>

      <div
        className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
      >
        <AppRouter/>
      </div>
    </Router>
  );
}

export default App;
