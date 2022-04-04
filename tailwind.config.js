const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
          fontFamily: {
            mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
            sans: ['Manrope', ...defaultTheme.fontFamily.sans],
            serif: ['Zilla Slab', ...defaultTheme.fontFamily.serif],
          }
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
