/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#2CB8E4",
        "main-green": "#15C89E",
        "mid-green": "#DFF6F1",
        "light-green": "#F2FFFC",
        "main-yellow": "#FFC225"
      }
    },
  },
  plugins: [],
}
