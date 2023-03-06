const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#BD0032",
        gray: "#1f1d21",
      },
      fontFamily: {
        sans: ["var(--utopia)", ...fontFamily.sans],
        sourceSans: ["var(--sourceSans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
