
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

router.get('/user', user.get)

router.get('/boards', boards.list)
router.post('/boards', boards.add)
router.get('/boards/:id', boards.item)
router.put('/boards/:id', boards.update)
router.delete('/boards/:id', boards.delete)

router.post('/columns', columns.add)
router.put('/columns/:id', columns.update)
router.delete('/columns/:id', columns.delete)

router.post('/cards', cards.add)
router.put('/cards/:id', cards.update)
router.delete('/cards/:id', cards.delete)


export default router
