/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  // 'extend' should be lowercase
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
        'fade-in': 'fadeIn 0.5s ease-out', 
        'slide-up': 'slideUp 0.5s ease-out',  // Missing 's' for seconds
      },
    }, 
  },
  plugins: [],
};
