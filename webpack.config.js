const path = require('path');
const plugins = require('./buildFiles/plugins.js');

const PATHS = {
  app: path.join(__dirname, 'home/index.jsx'),
  about: path.join(__dirname, 'about/index.jsx'),
  contact: path.join(__dirname, 'contact/index.jsx'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    home: PATHS.app,
    about: PATHS.about,
    contact: PATHS.contact,
    vendor: ['react', 'react-dom']
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
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
