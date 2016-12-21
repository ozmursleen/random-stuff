var webpack = require('webpack');
var unminifiedWebpackPlugin = require('unminified-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './app/app.js',
        'angular'
    ],
    output: {
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
        {
            test: /\.less$/,
            loader:  'style!css!less'
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [path.resolve(__dirname, 'node_modules')],
            query: {
                presets: 'es2015'
            }
        },
        {
            test: /\.html$/,
            loader: "raw-loader"
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
       /* new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new unminifiedWebpackPlugin()*/
    ]
};