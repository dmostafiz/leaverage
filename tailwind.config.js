module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/pages/**/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/**/**/*.{js,ts,jsx,tsx}', 
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/**/**/*.{js,ts,jsx,tsx}',
    './src/Components/DefaultLayout/*.{js,ts,jsx,tsx}',
    './src/Components/DefaultLayout/Home/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
