/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      extend: {
        spacing: {
          72: "18rem",
          84: "21rem",
          96: "24rem",
        },
      },
    },
  },
  plugins: [],
};
