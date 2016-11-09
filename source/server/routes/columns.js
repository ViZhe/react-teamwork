
import {Router} from 'express'

import Column from '../models/Column'
import {authMiddleware} from '../middleware'


const router = new Router()

const add = (req, res) => {
  const {board_id, name} = req.body

  Column.create({
    board_id,
    name
  })
    .then(column => res.json(column))
    .catch(err => res.status(500).json(err))
}

const update = (req, res) => {
  console.log('columns', 'update', req, res)
  res.json({
    place: 'columns',
    type: 'update'
  })
}

const remove = (req, res) => {
  console.log('columns', 'remove', req, res)
  res.json({
    place: 'columns',
    type: 'remove'
  })
}

router
  .all('*',
    authMiddleware.isAuthenticated
  )
  .post('/', add)
  .put('/:id', update)
  .delete('/:id', remove)


export default router
