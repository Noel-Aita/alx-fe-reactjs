/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // for Vite projects, use index.html at root
    "./src/**/*.{js,jsx,ts,tsx}", // all source files
    "./public/index.html"     // add public fallback if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
