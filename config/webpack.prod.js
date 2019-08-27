const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = merge(common, {
    mode: 'production',
    plugins: common.plugins.concat([
        new HtmlWebpackPlugin({
            environment: 0,
            template: path.resolve(__dirname, '../src/index.htm'),
            filename: 'index.html'
        })
    ])
});