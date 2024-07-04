import React, { useState } from "react";
import Content from "./Content";

function HideShow() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={toggleVisibility}
        className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && (
        <Content/>
      )}
    </div>
  );
}

export default HideShow;
