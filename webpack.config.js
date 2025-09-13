const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: '/', // 修改为根路径，避免相对路由问题
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@public': path.resolve(__dirname, 'public'),
        },
    },
    devtool: 'source-map',
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
            type: 'asset/resource',
            generator: {
                filename: 'assets/[name][ext]'
            }
        },
        {
            test: /\.(png|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/[name][ext]'
            }
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/assets',
                    to: 'assets',
                    noErrorOnMissing: true,
                },
            ],
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
