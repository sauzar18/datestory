import fs from 'fs'
import { Router } from 'express'
import consola from 'consola'
import xss from 'xss'
import moment from 'moment'
import multer from 'multer'
import connection from '../mysqlConnect'

const router = Router()
router.post('/posts', (req, res, next) => {
  let userId = xss(req.session.authUser.userid)
  if (!req.session.authUser) userId = 0
  const title = xss(req.body.post_title)
  const content = xss(req.body.post_content)
  const postName = xss(req.body.post_name)
  const location = xss(req.body.post_location)
  const category = xss(req.body.post_category)
  const thumbnail = xss(req.body.thumbnail)
  const Type = xss(req.body.post_status)
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const postQuery = `INSERT INTO date_posts (user_id, title, author, content, location, category, thumbnail, post_status, post_date) VALUES('${userId}', '${title}', '${postName}', '${content}', '${location}', '${category}', '${thumbnail}', '${Type}', '${createdAt}')`
  connection.query(postQuery, function (err, rows) {
    if (err) {
      consola.ready(err)
    } else {
      res.redirect(req.get('referer'))
    }
  })
})
router.post('/answers', (req, res, next) => {
  const id = xss(req.body.consult_id)
  const parent = xss(req.body.parent_id)
  const content = xss(req.body.answer)
  const author = xss(req.body.author)
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const postQuery = `INSERT INTO date_comments (consult_id, parent_id, author, answer, posted_at) VALUES('${id}', '${parent}', '${author}', '${content}', '${createdAt}')`
  connection.query(postQuery, function (err, rows) {
    if (err) {
      consola.ready(err)
    } else {
      res.redirect(req.get('referer'))
    }
  })
})

router.get('/get_answers/:id', (req, res, next) => {
  const slugQuery = req.params.id
  const clientQuery = `SELECT * FROM date_comments WHERE consult_id = "${slugQuery}"`
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

router.get('/post_columns/:offset', (req, res, next) => {
  const slugQuery = req.params.offset
  const clientQuery = `SELECT * FROM date_posts WHERE category = "みてみて" LIMIT 20 OFFSET ${slugQuery}`
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
router.get('/get_column/:id', (req, res, next) => {
  const slugQuery = req.params.id
  const clientQuery = `SELECT * FROM date_posts WHERE id = "${slugQuery}"`
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
router.get('/get_user_columns/:id', (req, res, next) => {
  const slugQuery = req.params.id
  const clientQuery = `SELECT * FROM date_posts WHERE user_id = "${slugQuery}"`
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
router.get('/consults', (req, res, next) => {
  const clientQuery = 'SELECT * FROM date_posts WHERE post_status = "公開" AND category = "相談" ORDER BY id DESC LIMIT 6'
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
router.get('/consults/:id', (req, res, next) => {
  const id = req.params.id
  const clientQuery = `SELECT * FROM date_posts WHERE post_status = "公開" AND category = "相談" AND id NOT IN ('${id}') ORDER BY id DESC LIMIT 6`
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
router.get('/newposts', (req, res, next) => {
  const type = '相談'
  const clientQuery = `SELECT * FROM date_posts WHERE post_status = "公開" AND category NOT IN ('${type}') ORDER BY id DESC LIMIT 3`
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
router.get('/newposts/:id', (req, res, next) => {
  const id = req.params.id
  const type = '相談'
  const clientQuery = `SELECT * FROM date_posts WHERE post_status = "公開" AND category NOT IN ('${type}') AND id NOT IN ('${id}') ORDER BY id DESC LIMIT 3`
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
const clientThumb = multer.diskStorage({
  destination: './static/upload/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage: clientThumb
})
router.post('/file_uploads', upload.single('thumbnail'), function (req, res) {
  const file = req.body.fileupload
  const filetype = 'picture'
  const sendAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const pathQuery = `SELECT * FROM date_media WHERE file_path = '${file}' LIMIT 1`
  const postQuery = `INSERT INTO date_media (file_path, file_type, uploaded_at) VALUES("${file}", "${filetype}", "${sendAt}")`
  if (file) {
    connection.query(pathQuery, function (err, path) {
      const pathExists = path.length
      if (pathExists) {
        res.status(401).json({
          error: '既にファイルが登録されているかファイル名が同じです。'
        })
      } else if (err) {
        res.redirect(req.get('referer'))
      } else {
        connection.query(postQuery, function (err, rows) {
          if (err) consola.error(err)
          else res.redirect(req.get('referer'))
        })
      }
    })
  }
})
router.post('/media_remove', (req, res, next) => {
  const getID = xss(req.body.ids)
  const getURL = `SELECT * FROM date_media WHERE id IN (${getID})`
  const query = `DELETE FROM date_media WHERE id IN (${getID})`
  connection.query(getURL, function (err, rows) {
    if (err) {
      consola.error(err)
    } else {
      const item = rows
      connection.query(query, function (err, rows) {
        if (err) {
          consola.error(err)
        } else {
          for (let i = 0; i < item.length; i++) {
            const element = './static' + item[i].file_path
            fs.unlink(element, (err) => {
              if (err) throw err
              consola.ready('successfully deleted')
            })
          }
          res.redirect(req.get('referer'))
        }
      })
    }
  })
})
export default router
