
import Board from '../models/board'


export default {
  list: (req, res) => {
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
  },
  add: (req, res) => {
    const {name} = req.body

    Board.create({
      owner_id: req.userId,
      name
    })
      .then(board => res.json(board))
      .catch(err => res.status(500).json(err))
  },
  item: (req, res) => {
    console.log('boards', 'item', req, res)
  },
  update: (req, res) => {
    console.log('boards', 'update', req, res)
  },
  delete: (req, res) => {
    console.log('boards', 'delete', req, res)
  }
}
