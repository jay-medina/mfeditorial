const path = require('path');
const plugins = require('./buildFiles/plugins.js');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: __dirname
};

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: '_bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
      loaders: [
          {
            test: /\.css$/,
            loader: "style!css"
          },
          {
            test: /\.jsx?$/,
            loader: ['babel'],
            query: {
              presets: ['es2015', 'react']
            }
          }
      ]
  },
  plugins: plugins.getPlugins()
};