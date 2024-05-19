/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-once': 'bounce 0.5s ease-in-out 1',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        bingo: "url('/src/assets/BINGO AMRY.png')",
        bingo1: "url('/src/assets/BINGO AMRY tr.png')",
        bingo2: "url('/src/assets/BINGO AMRYbg.png')",
      }
    },
  },
  plugins: [],
}

