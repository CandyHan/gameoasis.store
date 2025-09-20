const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        // React应用入口 - 用于游戏详情页
        app: './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: false, // 不清理，保留静态文件
        publicPath: '/',
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
            {
                loader: 'sass-loader',
                options: {
                    api: 'modern',
                    implementation: require('sass'),
                },
            },
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
            test: /\.(png|jpg|jpeg|gif|webp|avif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/[name][ext]'
            }
        },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/assets',
                    to: 'assets',
                    noErrorOnMissing: true,
                },
                // 复制静态主页
                {
                    from: 'public/index.html',
                    to: 'index.html',
                },
                // 复制SEO文件
                {
                    from: 'public/sitemap.xml',
                    to: 'sitemap.xml',
                },
                {
                    from: 'public/robots.txt',
                    to: 'robots.txt',
                },
            ],
        }),
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3001,
        hot: true,
        historyApiFallback: true,
        open: true,
    },
};
