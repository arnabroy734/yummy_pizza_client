/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        color1: "#faf6fa",
        color2: "#ff5818"
      }
    },
  },
  plugins: [],
}
