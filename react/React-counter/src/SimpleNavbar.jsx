import React, { useState } from "react";

const SimpleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MySite</div>

        {/* Hamburger Menu (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (hidden on mobile, visible on medium+ screens) */}
        <div
          className={`md:flex items-center space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <a href="#" className="text-white hover:underline">
            Home
          </a>
          <a href="#" className="text-white hover:underline">
            About
          </a>
          <a href="#" className="text-white hover:underline">
            Services
          </a>
          <a href="#" className="text-white hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
