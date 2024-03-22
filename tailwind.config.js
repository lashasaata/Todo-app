/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      creatorShadow: "0 35px 50px -15px rgba(194, 195, 214, 0.5)",
      mainShadow: "0 35px 50px -15px rgba(194, 195, 214, 0.5)",
    },
  },
  plugins: [],
};
