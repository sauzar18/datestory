import { Router } from 'express'

import postItem from './posts'
import register from './register'
const router = Router()

router.use(postItem)
router.use(register)

export default router
