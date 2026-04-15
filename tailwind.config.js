/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        secondary: '#f59e0b',
        accent: '#10b981',
      },
      fontFamily: {
        display: ['Noto Serif SC', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}