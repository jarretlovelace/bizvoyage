/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Skyfont', 'sans-serif'], // Your custom font here
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',  // Add the 's' for seconds here
        'slide-up': 'slideUp 0.5s ease-out', // Add the 's' for seconds here
      },
    },
  },
  plugins: [],
};
