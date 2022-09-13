/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': "#f0b12b",
        'grayColor': "#666666",
        'titleColor': "#222222"
      }
    },
  },
  plugins: [],
}
