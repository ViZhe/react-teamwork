
import fs from 'fs'
import path from 'path'
import Webpack from 'webpack'


const getExternals = () => (
  fs.readdirSync('node_modules')
    .filter(i => i !== '.bin')
)

export default {
  target: 'node',
  entry: './source/server',
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
        exclude: /node_modules/,
        plugins: [
          'transform-runtime'
        ]
      }
    ]
  },
  plugins: [
    new Webpack.IgnorePlugin(/\.(css|less|scss|svg|png|jpe?g|png)$/),
    new Webpack.optimize.UglifyJsPlugin({
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
