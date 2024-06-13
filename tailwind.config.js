import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {},
    extend: {
      fontFamily: {
        exo: "'Exo 2', sans-serif", // Adds a new `exo` class
        satisfy: "'Satisfy', cursive", // Adds a new `satisfy` class
      },
      colors: {
        // Configure your color palette here
        theme_primary: "#657A42",
        theme_secondary: "#d0d6bc",
        theme_light: "#FFFDFD",
        theme_red: "#FF0000",
      },
    },
  },
  plugins: [daisyui],
};
