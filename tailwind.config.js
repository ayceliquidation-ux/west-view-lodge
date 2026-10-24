/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#FAF8F5',
        stone: {
          50: '#FAF8F5',
          100: '#F3EFEA',
          200: '#E6DFD5',
          300: '#D4C9BA',
          400: '#B5A692',
          500: '#968671',
          600: '#786956',
          700: '#5E5243',
          800: '#423A30',
          900: '#2A251F',
        },
        lodge: {
          DEFAULT: '#182825',
          dark: '#0F1A18',
          light: '#243B37',
          muted: '#3A524D',
        },
        cedar: {
          DEFAULT: '#B87D4B',
          light: '#CFA075',
          dark: '#966134',
          subtle: '#F4EBE1',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 50px -12px rgba(24, 40, 37, 0.12)',
        'luxury-lg': '0 30px 60px -15px rgba(24, 40, 37, 0.22)',
      }
    },
  },
  plugins: [],
}
