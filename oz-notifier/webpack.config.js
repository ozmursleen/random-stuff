var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/app/app.js',
    'angular'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
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
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
    })
    /*new webpack.optimize.UglifyJsPlugin({
     compress: {
     warnings: false
     }
     })*/
  ]
};