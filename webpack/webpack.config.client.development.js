
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.client.common')


webpackConfig.devtool = 'cheap-module-eval-source-map'

webpackConfig.entry.main.push(
  'webpack-hot-middleware/client?reload=true'
)

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  })
)


module.exports = webpackConfig
