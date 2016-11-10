
import Webpack from 'webpack'
import webpackConfig from './webpack.config.client.common'


webpackConfig.entry.main.push(
  'webpack-hot-middleware/client'
)

webpackConfig.plugins.push(
  new Webpack.HotModuleReplacementPlugin(),
  new Webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  })
)


export default webpackConfig
