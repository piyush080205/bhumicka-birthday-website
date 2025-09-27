/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFB6C1',
        'pastel-purple': '#DDA0DD',
        'cream': '#F5F5DC',
        'soft-white': '#FFFAFA',
        'rose-pink': '#FFC0CB',
        'lavender': '#E6E6FA',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heart-float': 'heartFloat 8s ease-in-out infinite',
        'paw-walk': 'pawWalk 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartFloat: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) scale(1)', opacity: '0' },
        },
        pawWalk: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(calc(100vw + 100px))' },
        },
      },
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive'],
        'cute': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}