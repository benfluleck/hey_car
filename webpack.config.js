const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '<pages>': path.resolve(__dirname, 'src/pages'),
      '<components>': path.resolve(__dirname, 'src/components'),
      '<styles>': path.resolve(__dirname, 'src/styles'),
      '<helpers>': path.resolve(__dirname, 'src/helpers'),
      '<variables>': path.resolve(__dirname, 'src/styles/variables'),
      '<core>': path.resolve(__dirname, 'src/core'),
      '<api>': path.resolve(__dirname, 'src/api')
    }
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 7000,
    open: true,
    historyApiFallback: true
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
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
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};
