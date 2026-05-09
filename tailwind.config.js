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
          DEFAULT: '#C41230',
          light: '#D9192E',
          dark: '#A30F27',
        },
        'sp-bg': '#F5F5F2',
        'sp-blob': '#E5E5E0',
        'sp-circle': '#EDE8DE',
        'sp-kanji': '#D97B6C',
        'sp-beige': {
          DEFAULT: '#F0EBE3',
          light: '#FAF8F5',
          dark: '#E2D9CE',
        },
        'sp-dark': {
          DEFAULT: '#0F0F0D',
          soft: '#1A1A18',
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
