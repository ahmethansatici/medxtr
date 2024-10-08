/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/ui/badge.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(3, 70, 141)",
        "custom-light-blue": "rgb(16, 202, 240)",
        primary: {
          DEFAULT: "#0A3B5A",
          light: "#1C5A80",
          lighter: "#2E79A6",
          dark: "#072A40",
          darker: "#051B2A",
        },
        secondary: {
          DEFAULT: "#F0F4F8",
          dark: "#D0E1F0",
        },
        accent: {
          DEFAULT: "#FF6B35",
          light: "#FF8C5F",
        },
      },
      backgroundImage: {
        "hero-img": "url('/123456.jpg')",
      },
    },
  },
  plugins: [],
};
