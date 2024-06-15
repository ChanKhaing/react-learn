import React, { useState } from "react";
import Content from "./Content";

const HideShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
    
  
    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <button
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={toggleVisibility}
      >
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && (
        <Content/>
      )}
    </div>
  );
};

export default HideShow;
