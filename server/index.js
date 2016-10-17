
import Express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack/webpack.config.client.development'

import api from './api'


const server = new Express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || '3000'
const isProduction = process.env.NODE_ENV === 'production'

const assets = isProduction ? require('../assets.json') : ''

const compiler = webpack(config)
server.use(webpackDevMiddleware(compiler, {
  stats: {
    version: false,
    hash: false,
    timings: true,
    colors: true,
    chunk: false,
    chunkModules: false
  }
}))
server.use(webpackHotMiddleware(compiler))


server.use('/api/v1/', api)

server.get('*', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="ru-RU">
      <head>
        <meta charset="utf-8" >
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no"
        >
      </head>
      <body>
        <div id="app"></div>
        <script src="${isProduction ? assets.vendor.js : '/vendor.js'}"></script>
        <script async src="${isProduction ? assets.main.js : '/main.js'}" ></script>
      </body>
    </html>
  `)
})


server.listen(port, host, () =>
  console.info(`
######### (╮°-°)╮┳━━┳ #########

# ==> Server was started.
# ==> Link: http://${host}:${port}
# ==> Mode: ${isProduction ? 'Production ' : 'Development'}

######### ( ╯°□°)╯ ┻━━┻ #########
`)
)
