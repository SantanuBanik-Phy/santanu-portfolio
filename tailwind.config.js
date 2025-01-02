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
        // You can extend or change dark mode colors here if necessary
        darkBackground: '#3A3960', // Dark background color example
        darkText: '#CBD5E0', // Light text for dark mode
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

