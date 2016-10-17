
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')


const getExternals = () => {
  const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules'))
  return nodeModules.reduce((ext, mod) => {
    const result = ext
    result[mod] = `commonjs ${mod}`
    return result
  }, {})
}

module.exports = {
  target: 'node',
  entry: './server/index',
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
