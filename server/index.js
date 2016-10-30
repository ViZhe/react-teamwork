
import Express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import mongoose from 'mongoose'
import connectMongo from 'connect-mongo'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack/webpack.config.client.development'

import config from './config.gitsecret'
import api from './api'
import {
  passport,
  routes as authRoutes
} from './auth'


mongoose.Promise = global.Promise
mongoose.connect(config.db)

const server = new Express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || '3000'
const isProduction = process.env.NODE_ENV === 'production'

const assets = isProduction ? require('../assets.json') : ''

const MongoStore = connectMongo(session)

const compiler = webpack(webpackConfig)
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

server.disable('x-powered-by')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(cookieParser())
server.use(session({
  key: 'sid',
  secret: config.session.secret,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  resave: true,
  saveUninitialized: true
}))
server.use(passport.initialize())
server.use(passport.session())
server.use('/auth/v1/', authRoutes(passport))
server.use('/api/v1/', api)

server.get('*', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="ru-RU">
      <head>
        <meta charset="utf-8" >
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
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
