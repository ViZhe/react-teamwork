
const path = require('path')
const webpack = require('webpack')


module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './source/index'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'immutable'
    ]
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        plugins: ['transform-runtime', 'transform-decorators-legacy'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  stats: {
    version: false,
    hash: false,
    timings: true,
    colors: true,
    chunk: false,
    chunkModules: false
  }
}
