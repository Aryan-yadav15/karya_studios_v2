/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'grayish-orange': '#f0ebe6',
        'bright-red': '#f5693c',
        'brand-blue': '#4b69f0',
        'brand-green': '#2d7864',
        'dark-pink': '#a0325a',
      },
      fontFamily: {
        epilogue: ['var(--font-epilogue)', 'Epilogue', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      boxShadow: {
        hard: '8px 8px 0 0 #000',
        'hard-sm': '6px 6px 0 0 #000',
        'hard-lg': '12px 12px 0 0 #000',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
};
