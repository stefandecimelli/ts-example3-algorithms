const path = require('path');

module.exports = {
    mode: 'production',
    entry: './app/main.ts',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
