import { Router } from 'express'

import postItem from './posts'
const router = Router()

router.use(postItem)
export default router
