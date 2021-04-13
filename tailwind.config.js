module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './pages/**/**/*.{js,ts,jsx,tsx}',
    './pages/**/**/**/*.{js,ts,jsx,tsx}', 
    './Components/**/*.{js,ts,jsx,tsx}',
    './Components/**/**/*.{js,ts,jsx,tsx}',
    './Components/**/**/**/*.{js,ts,jsx,tsx}',
    './Components/DefaultLayout/*.{js,ts,jsx,tsx}',
    './Components/DefaultLayout/Home/*.{js,ts,jsx,tsx}',
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
