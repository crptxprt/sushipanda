/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'sp-red': {
          DEFAULT: '#C44F6E',
          light: '#D8748D',
          dark: '#9F3654',
        },
        'sp-bg': '#F8F3F1',
        'sp-blob': '#E9E2DB',
        'sp-circle': '#F2E5E1',
        'sp-kanji': '#D48C98',
        'sp-beige': {
          DEFAULT: '#F3E8E5',
          light: '#FCF7F5',
          dark: '#E4D4D1',
        },
        'sp-dark': {
          DEFAULT: '#171214',
          soft: '#241B1E',
        },
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
