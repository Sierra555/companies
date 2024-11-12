/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f6f7f9",
        secondary: "#abb3bf",
      }
    },
  },
  plugins: [],
}
