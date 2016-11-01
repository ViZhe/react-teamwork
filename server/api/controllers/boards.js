
import Board from '../models/board'


export default {
  add: (req, res) => {
    console.log('boards', 'add', req, res)
  },
  list: (req, res) => {
    const userId = req.session.passport && req.session.passport.user
    if (!userId) {
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }

    return Board.find({owner_id: userId})
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
