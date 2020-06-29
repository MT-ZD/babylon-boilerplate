const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/app',
    watch: true,
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
