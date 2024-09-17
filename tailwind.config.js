/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure Tailwind scans the HTML file
    "./src/components/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, and TSX files in components directory
    "./src/utils/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, and TSX files in data directory
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, and TSX files in src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#f1c40f",
        dark: "#2c3e50",
        light: "#ecf0f1",
      },
    },
  },
  plugins: [],
};
