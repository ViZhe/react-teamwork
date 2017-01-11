
import path from 'path'
import Webpack from 'webpack'
import AssetsWebpackPlugin from 'assets-webpack-plugin'


const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isProduction = mode === 'production'

const config = {
  resolve: {
    extensions: ['.js', '.jsx']
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
    filename: isProduction ? '[name]-[hash].js' : '[name].js',
    chunkFilename: isProduction ? '[name]-[hash].chunk.js' : '[name].chunk.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode)
      }
    })
  ],
  performance: {
    hints: false
  },
  stats: {
    version: false,
    hash: false,
    timings: true,
    colors: true,
    chunk: false,
    chunkModules: false
  }
}

const jsRule = {
  test: /\.jsx?$/,
  loaders: ['babel-loader'],
  exclude: /node_modules/
}

if (isProduction) {
  config.plugins.push(
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', filename: '[name]-[hash].js'
    }),
    new AssetsWebpackPlugin({
      filename: 'assets.json'
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
} else {
  config.entry.main.unshift(
    'webpack-hot-middleware/client'
  )
  jsRule.loaders.unshift('react-hot-loader')
  config.plugins.push(
    new Webpack.HotModuleReplacementPlugin()
  )
}

config.module.rules.push(jsRule)


export default config
