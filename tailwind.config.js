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
        secondary: "#F5F5F5",
        button2: "#DB4444"
      }
    },
  },
  plugins: [],
}