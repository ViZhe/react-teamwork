
import {Router} from 'express'

import {authMiddleware} from '../middlewares'
import boards from './controllers/boards'
import columns from './controllers/columns'
import cards from './controllers/cards'
import user from './controllers/user'


const router = new Router()

router.all('*',
  authMiddleware.isAuthenticated
)

router.get('/boards', boards.list)
router.get('/columns', columns.list)
router.get('/cards', cards.list)
router.get('/user', user.get)


export default router
