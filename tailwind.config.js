/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1366px",
      default: "1440px",
      "3xl": "1536px",
      "4xl": "1680px",
      "5xl": "1920px",
      "6xl": "2560px",
    },
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"], // Not Sure but will updated in the future
    },
    colors: {
      Primary: {
        25: "F5F9FF",
        50: "#EBF3FF",
        100: "#D4E3FB",
        200: "#AFC6F2",
        300: "#7D9BD7",
        400: "#536FB0",
        500: "#253D7B",
        600: "#1B2E69",
        700: "#122158",
        800: "#0B1747",
        900: "#07103B",
        950: "#060E2D"
      }
    },
  },
  plugins: [],
};

module.exports = config;
