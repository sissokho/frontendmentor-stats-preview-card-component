module.exports = {
    content: ['./index.html'],
    theme: {
        colors: {
            white: 'hsl(0, 0%, 100%)',
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
