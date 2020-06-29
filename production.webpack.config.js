const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/app',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            earcut: 'earcut',
        }),
    ],
};
