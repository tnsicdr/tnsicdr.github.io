module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            cursor: ['hover']
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
