
const webpack = require('webpack')
const AssetsWebpackPlugin = require('assets-webpack-plugin')

const webpackConfig = require('./webpack.config.client.common')


webpackConfig.output.filename = '[name]-[hash].js'
webpackConfig.output.chunkFilename = '[name]-[hash].chunk.js' // TODO: test it. Or [chunkhash] ?

webpackConfig.plugins.push(
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name]-[hash].js'),
  new AssetsWebpackPlugin({
    filename: 'assets.json'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
)


module.exports = webpackConfig
