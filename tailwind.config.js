/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./public/**/*.{html,js}/'],
    theme: {
        extend: {
            fontFamily: {
                bodoni: ['"Bodoni Moda"'],
                ...defaultTheme.fontFamily.sans,
            },
        },
        colors: {
            onRed: '#a800000',
            onRedTwo: '#731010',
            onBlack: '#1f1f1f',
            onDarkGrey: '#707070',
            onLightGrey: '#d4d4d4',
        },
    },
    plugins: [],
}
