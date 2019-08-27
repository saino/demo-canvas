const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        compress: false,//不压缩
        port: 8765,
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
    },
    plugins: common.plugins.concat([
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.htm'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ])
});