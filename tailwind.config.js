/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'big-stone': {
          '50': '#f4f4f6', 
          '100': '#e9eaed', 
          '200': '#c7cad1', 
          '300': '#a5aab5', 
          '400': '#626a7e', 
          '500': '#1E2A47', 
          '600': '#1b2640', 
          '700': '#172035', 
          '800': '#12192b', 
          '900': '#0f1523'
      },
        'white': "#fff",
      },
    },
  },
  plugins: [],
};
