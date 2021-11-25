/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = (mode) => ({
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '<pages>': path.resolve(__dirname, 'src/pages'),
      '<components>': path.resolve(__dirname, 'src/components'),
      '<styles>': path.resolve(__dirname, 'src/styles'),
      '<helpers>': path.resolve(__dirname, 'src/helpers'),
      '<constants>': path.resolve(__dirname, 'src/constants'),
      '<variables>': path.resolve(__dirname, 'src/styles/variables')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hey Car Application',
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode)
    })
  ]
});
