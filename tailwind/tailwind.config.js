/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./screen/**/*.{html,js}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          100: "#dad5fd",
          200: "#b6acfc",
          300: "#9182fa",
          400: "#6d59f9",
          500: "#482ff7",
          600: "#3a26c6",
          700: "#2b1c94",
          800: "#1d1363",
          900: "#0e0931",
        },
        secondary: "#9c1de7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

