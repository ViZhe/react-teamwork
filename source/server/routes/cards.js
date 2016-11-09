
import {Router} from 'express'

import Card from '../models/Card'
import {authMiddleware} from '../middleware'


const router = new Router()

const add = (req, res) => {
  const {column_id, name} = req.body

  Card.create({
    column_id,
    name
  })
    .then(card => res.json(card))
    .catch(err => res.status(500).json(err))
}

const update = (req, res) => {
  console.log('cards', 'update', req, res)
  res.json({
    place: 'cards',
    type: 'update'
  })
}

const remove = (req, res) => {
  console.log('cards', 'remove', req, res)
  res.json({
    place: 'cards',
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
