const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
    libraryTarget: "commonjs2",
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'ignore-loader' }
    ]
  }
};