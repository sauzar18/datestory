import { Router } from 'express'

import xss from 'xss'
import moment from 'moment'
import connection from '../mysqlConnect'

const router = Router()
router.post('/posts', (req, res, next) => {
  const title = xss(req.body.post_title)
  const content = xss(req.body.post_content)
  const postName = xss(req.body.post_name)
  const location = xss(req.body.post_location)
  const category = xss(req.body.post_category)
  const thumbnail = xss(req.body.thumbnail)
  const Type = xss(req.body.post_status)
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const postQuery = `INSERT INTO date_posts (title, author, content, location, category, thumbnail, post_status, post_date) VALUES('${title}', '${postName}', '${content}', '${location}', '${category}', '${thumbnail}', '${Type}', '${createdAt}')`
  connection.query(postQuery, function (err, rows) {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('error')
    } else {
      res.redirect(req.get('referer'))
    }
  })
})
router.get('/post_columns/:offset', (req, res, next) => {
  const slugQuery = req.params.offset
  const clientQuery = `SELECT * FROM date_posts LIMIT 20 OFFSET ${slugQuery}`
  connection.query(clientQuery, function (err, rows) {
    const users = rows
    if (err) {
      res.json({
        Error: true,
        Message: 'Error executing MySQL query'
      })
    } else {
      res.json(users)
    }
  })
})
export default router
