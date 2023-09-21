module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss')(),
                require('autoprefixer')(),
            ],
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
}