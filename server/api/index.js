
import {Router} from 'express'

import boards from './controllers/boards'
import columns from './controllers/columns'
import cards from './controllers/cards'


const router = new Router()

router.get('/boards', boards.list)
router.get('/columns', columns.list)
router.get('/cards', cards.list)


export default router
