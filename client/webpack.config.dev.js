const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: {index: 'index.html'},
    compress:true,
    hotOnly:true,
    port:9000,
    open:true,
    filename: 'index.js',
    overlay:{
      errors: false,
      warnings: false
    },
    proxy: {
      '/**': {
        target: 'http://localhost:10088/',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
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
        test: /\.(js|jsx)?$/,
        exclude: '/node_modules/',
        use: 'babel-loader'
      },
      // {
      //   test:/\.js$/,
      //   exclude: '/node_modules/',
      //   loader: "eslint-loader",
      //   options:{
      //     emitWarning: true
      //   }
      // },
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