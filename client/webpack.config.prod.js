const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    publicPath: './',
    filename: 'bundle.js'
  },
    plugins: [
      new CopyWebpackPlugin([
        {from: './src/assets/favicon.png', to: 'images'},
        {from:'./src/assets/fonts/raleway200.eot', to: 'fonts'},
        {from:'./src/assets/fonts/raleway200.svg', to: 'fonts'},
        {from:'./src/assets/fonts/raleway200.ttf', to: 'fonts'},
        {from:'./src/assets/fonts/raleway200.woff', to: 'fonts'},
        {from:'./src/assets/fonts/raleway200.woff2', to: 'fonts'},
        {from:'./src/assets/fonts/ralewayRegular.eot', to: 'fonts'},
        {from:'./src/assets/fonts/ralewayRegular.svg', to: 'fonts'},
        {from:'./src/assets/fonts/ralewayRegular.ttf', to: 'fonts'},
        {from:'./src/assets/fonts/ralewayRegular.woff', to: 'fonts'},
        {from:'./src/assets/fonts/ralewayRegular.woff2', to: 'fonts'},
        {from:'./src/index.css', to: 'style'}
        ]),
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
        exclude: '/node_modules/',
        loader: "eslint-loader",
        options:{
          emitWarning: true,
        }
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: '/node_modules/',
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
              localIdentName: '[name]__[local]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
                plugins: (loader) => [
                    require('postcss-advanced-variables')()
                ]
            }
          }
        ]
      },
      {
        test:/\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
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