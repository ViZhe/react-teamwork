
import fs from 'fs'
import Express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import mongoose from 'mongoose'
import cors from 'cors'
import connectMongo from 'connect-mongo'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack/client.webpack.config'

import passport from './middleware/passport'
import routes from './routes'


const configPath = fs.existsSync(`${process.cwd()}/source/server/config.gitsecret.js`)
  ? './config.gitsecret'
  : './config.example'

// eslint-disable-next-line import/no-dynamic-require
const config = require(configPath).default

mongoose.Promise = global.Promise
mongoose.connect(config.databases.mongo)

const app = new Express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || '3000'
const isProduction = process.env.NODE_ENV === 'production'

const assets = isProduction ? require('../../assets.json') : ''

const MongoStore = connectMongo(session)

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  stats: webpackConfig.stats
}))
app.use(webpackHotMiddleware(compiler))

app.disable('x-powered-by')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(session({
  key: 'sid',
  secret: config.session.secret,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(routes)

app.get('*', (req, res) => {
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


app.listen(port, host, () => (
  console.info(`
######### (╮°-°)╮┳━━┳ #########

# ==> Server was started.
# ==> Link: http://${host}:${port}
# ==> Mode: ${isProduction ? 'Production ' : 'Development'}

######### (╯°□°)╯ ┻━━┻ #########
`)
))
