const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.ejs',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/html/destination.html',
      template: './src/pages/html/destination.ejs',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/html/crew.html',
      template: './src/pages/html/crew.ejs',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/html/technology.html',
      template: './src/pages/html/technology.ejs',
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist'),
  },
  devServer: {
    watchFiles: ['src/**/*.html', 'src/**/*.ejs', 'public/**/*'],
    client: {
      logging: 'none',
    },
  },
});
