
import Board from '../models/board'
import Column from '../models/column'
import Card from '../models/card'


export default {
  generate: (req, res) => {
    new Promise((resolve) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= 3; i++) {
        console.log(i)
        const newBoard = new Board()
        newBoard.owner_id = req.session.passport.user
        newBoard.name = `Доска №${i}`

        newBoard.save((err1, board) => {
          // eslint-disable-next-line no-plusplus
          for (let ii = 1; ii <= 3; ii++) {
            const newColumn = new Column()
            newColumn.board_id = board.id
            newColumn.name = `Столбец №${ii} / ${i}`

            newColumn.save((err2, column) => {
              // eslint-disable-next-line no-plusplus
              for (let iii = 1; iii <= 3; iii++) {
                const newCard = new Card()
                newCard.column_id = column.id
                newCard.name = `Карточка №${iii} / ${ii} / ${i}`

                newCard.save()
              }
            })
          }
        })
      }
      resolve({status: 'ok'})
    })
      .then(result => res.json(result))
  },
  delete: (req, res) => {
    Promise.all([
      Board.remove({}).exec(),
      Column.remove({}).exec(),
      Card.remove({}).exec()
    ])
    .then(result => res.json(result))
  }
}
