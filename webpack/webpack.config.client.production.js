
import Webpack from 'webpack'
import AssetsWebpackPlugin from 'assets-webpack-plugin'

import webpackConfig from './webpack.config.client.common'


webpackConfig.output.filename = '[name]-[hash].js'
webpackConfig.output.chunkFilename = '[name]-[hash].chunk.js' // TODO: test it. Or [chunkhash] ?

webpackConfig.plugins.push(
  new Webpack.optimize.CommonsChunkPlugin('vendor', '[name]-[hash].js'),
  new AssetsWebpackPlugin({
    filename: 'assets.json'
  }),
  new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new Webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
)


export default webpackConfig
