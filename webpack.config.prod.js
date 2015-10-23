var path = require('path');
var webpack = require('webpack');


module.exports = {
  cache: false,
  debug: false,
  devtool: 'source-map',

  entry: {
    main: './src/main.js',
    vendor: [
      'classnames',
      'event-signal',
      'firebase',
      'history',
      'immutable',
      'react',
      'react-dom',
      'react-router'
    ]
  },

  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel', test: /\.js$/ }
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        unused: true,
        warnings: false
      }
    })
  ],

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('./src')
  },

  stats: {
    cached: true,
    cachedAssets: true,
    chunks: true,
    chunkModules: false,
    colors: true,
    hash: false,
    reasons: true,
    timings: true,
    version: false
  }
};
