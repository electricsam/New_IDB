const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js'),
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/idb/',
    filename: 'bundle.js'
  },
    plugins: [
      new UglifyJSPlugin({
        test: /\.js($|\?)/i,
        sourceMap:true,
        uglifyOptions: {
          compress: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
  module: {
    rules: [
      {
        test:/\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        options:{
          emitWarning: true,
        }
      },
      {
        test: /\.(js|jsx)?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        use:[
          {
            loader: 'file-loader?limit=10000&mimetype=image/png'
          }
        ]
      }
    ]
  }
}