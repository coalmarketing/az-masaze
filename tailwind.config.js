/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-green': 'var(--primary-green)',
        'primary-yellow': 'var(--primary-yellow)',
        'zelena': '#008630',
      }
    },
  },
  plugins: [],
} 