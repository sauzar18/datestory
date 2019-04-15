import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'
import xss from 'xss'
import hasher from 'wordpress-hash-node'
import connection from './mysqlConnect'
import api from './api'
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(session({
  secret: 'MUcSHvACs~F$',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxage: 1000 * 60 * 30
  }
}))
app.use(csrf({ cookie: true }))
app.use('/api', api)
app.post('/api/login', function (req, res) {
  const email = xss(req.body.usermail)
  const password = xss(req.body.password)
  const query = 'SELECT * FROM date_users WHERE user_mail = "' + email + '"'
  connection.query(query, function (err, rows) {
    if (err) {
      res.status(401).json({
        error: 'ログイン失敗'
      })
    } else {
      for (let i = 0; i < rows.length; i++) {
        const json = JSON.stringify(rows[i])
        const userId = JSON.parse(json)
        if (email === userId.user_mail && hasher.CheckPassword(password, userId.user_password) === true) {
          req.session.authUser = {
            userid: userId.id,
            name: userId.user_name,
            usermail: userId.user_mail,
            userpass: userId.user_password,
            permission: userId.permission
          }
          return res.json({
            userid: userId.id,
            name: userId.user_name,
            usermail: userId.user_mail,
            userpass: userId.user_password,
            permission: userId.permission
          })
        } else if (err) {
          // eslint-disable-next-line no-console
          console.log('error')
        } else {
          res.status(401).json({
            error: 'ログイン失敗'
          })
        }
      }
    }
  })
})
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({
    ok: true
  })
})
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
