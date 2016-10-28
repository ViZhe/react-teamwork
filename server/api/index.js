
import {Router} from 'express'

import boards from './controllers/boards'
import columns from './controllers/columns'
import cards from './controllers/cards'
import me from './controllers/me'


const router = new Router()

router.get('/boards', boards.list)
router.get('/columns', columns.list)
router.get('/cards', cards.list)
router.get('/me', me.get)


export default router
