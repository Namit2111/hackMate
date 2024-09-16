/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#f6f6f6",
        customWhite: "#fff",
        customBlack: "#171717",
        customGrayTwo: "#797979",
      },
    },
  },
  plugins: [],
};
