/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#363738",
        secondary1: "#FEFAF1",
        text: "#FAFAFA",
        
      }
    },
  },
  plugins: [],
}