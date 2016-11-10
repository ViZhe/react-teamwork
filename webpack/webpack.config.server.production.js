
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')


const getExternals = () => (
  fs.readdirSync('node_modules')
    .filter(i => i !== '.bin')
)

module.exports = {
  target: 'node',
  entry: './source/server/index',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'server.js'
  },
  externals: getExternals(),
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        plugins: [
          'transform-react-constant-elements',
          'transform-react-inline-elements'
        ],
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less|scss|svg|png|jpe?g|png)$/),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
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
