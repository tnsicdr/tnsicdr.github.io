const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        viking: {
          50: '#f2f8fd',
          100: '#e5eff9',
          200: '#c5dff2',
          300: '#92c5e7',
          400: '#68afdc',
          500: '#328bc5',
          600: '#236fa6',
          700: '#1d5887',
          800: '#1c4c70',
          900: '#1c415e',
        },
      },
      fontFamily: {
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        serif: ['Zilla Slab', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
