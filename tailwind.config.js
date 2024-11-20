/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f74b7",
        secondary: "#9ab5c5",
      },
      fontFamily: {
        rubik: ["Rubik Scribble", "system-ui"]
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      cursor: ["hover", "focus"],
      backgroundColor: ["hover", "focus"],
    },
  },
};
