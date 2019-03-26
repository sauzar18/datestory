import { Router } from 'express'
import moment from 'moment'
import nodemailer from 'nodemailer'
import xss from 'xss'
import hasher from 'wordpress-hash-node'
import connection from '../mysqlConnect'
const config = require('../config').default
const router = Router()
// eslint-disable-next-line no-unused-vars
let arrResponse = {}
router.post('/register', function (req, res, next) {
  const name = xss(req.body.name)
  const email = xss(req.body.email)
  const password = hasher.HashPassword(xss(req.body.password))
  const permission = xss(req.body.permission)
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const output = `dates事務局

${name}様が登録いたしました。

ログインID:${email}

登録日時:${createdAt}
----------------------------------------------------------------
  dates事務局

  Email: support@dates.jp
  URL: https://dates.jp
----------------------------------------------------------------`
  const reverse = `dates事務局

${name}様
datesへのご登録ありがとうございます。

下記URLよりサイトをご利用いただけます。
https://dates.jp/

この返信は自動返信メールです。
その他、ご質問、ご要望があれば、下記URLより
お問い合わせください。
https://dates.jp/contact

----------------------------------------------------------------
  dates事務局

  Email: support@dates.jp
  URL: https://dates.jp
----------------------------------------------------------------`
  const emailQuery = 'SELECT * FROM dates_users WHERE user_login = "' + email + '" LIMIT 1'
  const registerQuery = 'INSERT INTO dates_users (user_login, user_pass, user_name, permission, create_at) VALUES("' + email + '", ' + '"' + password + '",  ' + '"' + name + '", ' + '"' + permission + '", ' + '"' + createdAt + '")'
  const transporter = nodemailer.createTransport(config.transporter)

  const mailOptions = {
    from: 'sauzar18@gmail.com',
    to: 'sauzar18@gmail.com',
    subject: `【dates事務局】${name}様にご登録いただきました。`,
    text: output
  }
  const autoSend = {
    from: 'sauzar18@gmail.com',
    to: email,
    subject: `【dates事務局】${name}様ご登録ありがとうございます。`,
    text: reverse
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      arrResponse = {
        'status': 'error',
        'error': error
      }
      res.status(500)
    } else {
      // eslint-disable-next-line no-console
      console.log(info.accepted)
      arrResponse = {
        'status': 'success',
        'data': info.accepted
      }
      transporter.sendMail(autoSend, (error, info) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log('error')
        } else {
          // eslint-disable-next-line no-console
          console.log(info.accepted)
        }
      })
    }
    res.end()
  })
  connection.query(emailQuery, function (err, email) {
    const emailExists = email.length
    if (emailExists) {
      res.status(401).json({
        error: '既にメールアドレスが登録されています'
      })
    } else if (err) {
      // eslint-disable-next-line no-console
      console.log('error')
    } else {
      // eslint-disable-next-line handle-callback-err
      connection.query(registerQuery, function (err, rows) {
        res.json({
          ok: true
        })
      })
    }
  })
})
export default router
