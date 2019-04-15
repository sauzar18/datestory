import { Router } from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import xss from 'xss'
import cookieParser from 'cookie-parser'
import hasher from 'wordpress-hash-node'
import connection from '../mysqlConnect'
const router = Router()

router.post('/login', function (req, res) {
  const email = xss(req.body.usermail)
  const password = xss(req.body.password)
  const query = 'SELECT * FROM date_users WHERE user_mail = "' + email + '"'
  connection.query(query, function (err, rows) {
    if (err) {
      res.status(401).json({
        error: 'ログイン失敗'
      })
    } else {
      for (var i = 0; i < rows.length; i++) {
        const json = JSON.stringify(rows[i])
        const userId = JSON.parse(json)
        if (email === userId.user_mail && hasher.CheckPassword(password, userId.user_password) === true) {
          req.session.authUser = {
            userid: userId.id,
            usermail: userId.user_mail,
            userpass: userId.user_password,
            username: userId.user_name,
            permission: userId.permission
          }
          return res.json({
            userid: userId.id,
            usermail: userId.user_mail,
            userpass: userId.user_password,
            username: userId.user_name,
            permission: userId.permission
          })
        } else if (err) {
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
export default router
