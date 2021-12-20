module.exports = {
    content: ['./index.html'],
    theme: {
        colors: {
            white: {
                DEFAULT: 'hsl(0, 0%, 100%)',
                'transparent-main': 'hsla(0, 0%, 100%, 0.75)',
                'transparent-stats': 'hsla(0, 0%, 100%, 0.6)',
            },
            blue: {
                dark: 'hsl(233, 47%, 7%)',
                desaturated: 'hsl(244, 38%, 16%)',
            },
            violet: 'hsl(277, 64%, 61%)',
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
            lexend: ['Lexend Deca', 'sans-serif'],
        },
        fontWeight: {
            regular: 400,
            bold: 700,
        },
        extend: {
            fontSize: {
                body: '15px',
            },
        },
    },
    plugins: [],
}
