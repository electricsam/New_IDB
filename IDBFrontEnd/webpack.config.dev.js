const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js'),
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    compress:true,
    hotOnly:true,
    port:9000,
    open:true,
    filename: 'index.js',
    overlay:{
      errors: true,
      warnings: true,
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
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