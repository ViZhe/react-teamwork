
import Board from '../models/board'


export default {
  add: (req, res) => {
    console.log('boards', 'add', req, res)
  },
  list: (req, res) => {
    Board.find({owner_id: req.userId})
      .populate({
        path: 'columns',
        populate: {
          path: 'cards'
        }
      })
      .then(boards => res.json(boards))
      .catch(err => res.status(500).json(err))
  },
  item: (req, res) => {
    console.log('boards', 'item', req, res)
  },
  delete: (req, res) => {
    console.log('boards', 'delete', req, res)
  },
  update: (req, res) => {
    console.log('boards', 'update', req, res)
  }
}
