const path = require('path');
const plugins = require('./buildFiles/plugins.js');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: __dirname,
  images: __dirname
};

module.exports = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
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
          },
          {
            test: /\.(jpg|png)$/,
            loader: 'url',
            include: PATHS.images
          }
      ]
  },
  plugins: plugins.getPlugins()
};