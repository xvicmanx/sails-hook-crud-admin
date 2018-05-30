const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
    publicPath: '/',
  },
  target: 'web',
  // externals: nodeExternals(),
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
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};