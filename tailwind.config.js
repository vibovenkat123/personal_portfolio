/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        popouttext: "#ffcc80",
        primarytext: "#ff9480",
        secondary: "#ff9480",
        primary: "#18edbb",
        link: "#05c5ff",
        softtext: "#aeaed8",
      }
    },
  },
  plugins: [],
}
