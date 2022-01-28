const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: "/",
    },
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                ],
            },
            {
                test: /\.(s[ac]ss)$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|webp|giv)$/,
                type: 'asset',
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        allowedHosts: path.dirname(__dirname, 'build'),
        port: 8080,
        compress: true,
        historyApiFallback: true,
    }
}
