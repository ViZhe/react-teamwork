
import {Router} from 'express'

import boardsRoutes from './boards'
import columnsRoutes from './columns'
import cardsRoutes from './cards'
import userRoutes from './user'
import toolsRoutes from './tools'
import authRoutes from './auth'


const router = new Router()

router.use('/api/v1/boards', boardsRoutes)
router.use('/api/v1/cards', columnsRoutes)
router.use('/api/v1/cards', cardsRoutes)
router.use('/api/v1/user', userRoutes)
router.use('/api/v1/tools', toolsRoutes)
router.use('/auth/v1', authRoutes)


export default router
