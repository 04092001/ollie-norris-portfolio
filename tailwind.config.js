/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./public/**/*.{html,js}/'],
    theme: {
        extend: {
            fontFamily: {
                bodoni: ['"Bodoni Moda"'],
                multivacGhost: ['"Multivac Ghost'],
                sans: ['Bodoni Moda'],
                leather: ['Leather'],
            },
            zIndex: {
                1: '11',
            },
        },
        colors: {
            background: '#1f1f1f',
            lightgrey: '#d4d4d4',
            blackrgba: 'rgba(0, 0, 0, 0.7)',
            grey: '#D6D8DE',
            slate: {
                50: 'rgb(248, 250, 252)',
                100: 'rgb(241, 245, 249)',
                200: 'rgb(226, 232, 240)',
                300: 'rgb(203, 213, 225)',
                400: 'rgb(148, 163, 184)',
                500: 'rgb(100, 116, 139)',
                600: 'rgb(71, 85, 105)',
                700: 'rgb(51, 65, 85)',
                800: 'rgb(30, 41, 59)',
                900: 'rgb(15, 23, 42)',
                950: 'rgb(2, 6, 23)',
            },
        },
    },
    plugins: [],
}
