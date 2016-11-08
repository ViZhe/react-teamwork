
import Column from '../models/column'


export default {
  add: (req, res) => {
    const {board_id, name} = req.body

    Column.create({
      board_id,
      name
    })
      .then(column => res.json(column))
      .catch(err => res.status(500).json(err))
  },
  update: (req, res) => {
    console.log('columns', 'update', req, res)
  },
  delete: (req, res) => {
    console.log('columns', 'delete', req, res)
  }
}
