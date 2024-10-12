import { useState } from "react";

function Lightmood() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is a card with light and dark mode functionality.
          </p>
          <button
            onClick={toggleDarkMode}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lightmood
