
import {Router} from 'express'

import Board from '../models/Board'
import {authMiddleware} from '../middleware'


const router = new Router()

const list = (req, res) => {
  Board.find({owner_id: req.userId})
    .populate({
      path: 'columns',
      populate: {
        path: 'cards'
      }
    })
    .exec()
    .then(boards => res.json(boards))
    .catch(err => res.status(500).json(err))
}

const add = (req, res) => {
  const {name} = req.body

  Board.create({
    owner_id: req.userId,
    name
  })
    .then(board => res.json(board))
    .catch(err => res.status(500).json(err))
}

const item = (req, res) => {
  console.log('boards', 'item', req, res)
  res.json({
    place: 'boards',
    type: 'item'
  })
}

const update = (req, res) => {
  console.log('boards', 'update', req, res)
  res.json({
    place: 'boards',
    type: 'update'
  })
}

const remove = (req, res) => {
  console.log('boards', 'remove', req, res)
  res.json({
    place: 'boards',
    type: 'remove'
  })
}

router
  .all('*',
    authMiddleware.isAuthenticated
  )
  .get('/', list)
  .post('/', add)
  .get('/:id', item)
  .put('/:id', update)
  .delete('/:id', remove)


export default router
