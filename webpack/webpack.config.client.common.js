
import path from 'path'
import Webpack from 'webpack'


export default {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    main: [
      'babel-polyfill',
      './source/client/index'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'mobx',
      'mobx-react'
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
        plugins: [
          'transform-runtime'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Webpack.optimize.OccurenceOrderPlugin()
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
