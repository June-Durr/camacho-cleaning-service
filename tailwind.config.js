/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: '#000080',
      secondary: '#4169E1', //blue
      accent: '#FFFF00', //yellow
      white: '#ffffff',

      gray: {
        '100': '#f5f5f5',
        '200': '#e5e5e5',
        '300': '#d5d5d5',
        '400': '#c5c5c5',
        '500': '#b5b5b5',
        '600': '#a5a5a5',
        '700': '#959595',
        '800': '#858585',
        '900': '#757575',
      },
    },
    extend: {},
  },
  plugins: [],
};
