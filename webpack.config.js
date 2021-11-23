const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 7000,
    hot: true,
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
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' })]
};
