/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        popouttext: "#ffcc80",
        primarytext: "#ff9480",
        secondary: "#ff9480",
        primary: "#18edbb",
        link: "#1b95d1",
        softtext: "#aeaed8",
      },
    },
  },
  plugins: [],
};
