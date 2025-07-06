const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@public': path.resolve(__dirname, 'public'),
        },
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.scss$/i,
            use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                modules: {
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                },
                },
            },
            'sass-loader',
            ],
        },
        {
            test: /\.svg$/i,
            type: 'asset',
            parser: {
                dataUrlCondition: {
                    maxSize: 8 * 1024, // 8kb
                },
            },
        },
        {
            test: /\.(png|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        }),
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
        open: true,
    },
};
