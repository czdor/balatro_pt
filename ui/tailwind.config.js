/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#818EA0',
          primary: '#818EA0', // text
          secondary: '#1E293B',

          metal: '#818EA0',
          gray: '#F1F5F9', // secondary background
          white: "#FFFFFF", // text
        },
        dark: {
          background: '#202634',
          primary: '#F1F5F9',  // text
          secondary: '#283144',

          metal: '#F1F5F9',
          white: "#020817",
          gray: '#778498',
        }
      }
    }
  },
  plugins: [],
}

