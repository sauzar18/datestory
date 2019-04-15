import { Router } from 'express'

import postItem from './posts'
import register from './register'
import login from './login'
const router = Router()

router.use(postItem)
router.use(register)
router.use(login)

export default router
