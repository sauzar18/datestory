import { Router } from 'express'
import moment from 'moment'
import consola from 'consola'
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
  const emailQuery = `SELECT * FROM date_users WHERE user_mail = "${email}" LIMIT 1`
  const registerQuery = `INSERT INTO date_users (user_name, user_mail, user_password, permission, created_at) VALUES("${name}", "${email}", "${password}", "${permission}", "${createdAt}")`
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
      arrResponse = {
        'status': 'success',
        'data': info.accepted
      }
      transporter.sendMail(autoSend, (error, info) => {
        if (error) consola.ready(error)
        else consola.ready(info.accepted)
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
      consola.ready(err)
    } else {
      connection.query(registerQuery, function (err, rows) {
        if (rows) {
          res.json({
            ok: true
          })
        } else if (err) {
          consola.ready(err)
          res.json({
            ok: false
          })
        }
      })
    }
  })
})
export default router
