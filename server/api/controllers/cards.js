
import Card from '../models/card'


export default {
  add: (req, res) => {
    const {column_id, name} = req.body

    Card.create({
      column_id,
      name
    })
      .then(card => res.json(card))
      .catch(err => res.status(500).json(err))
  },
  update: (req, res) => {
    console.log('cards', 'update', req, res)
  },
  delete: (req, res) => {
    console.log('cards', 'delete', req, res)
  }
}
