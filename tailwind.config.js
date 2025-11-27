/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#A855F7',
          dark: '#050505',
          card: '#121217',
          accent: '#D946EF'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a0a38 0deg, #050505 180deg, #2a0a38 360deg)',
      }
    }
  },
  plugins: [],
}