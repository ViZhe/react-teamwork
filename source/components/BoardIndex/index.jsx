
import React from 'react'

import ColumnList from '../ColumnList'


const Column = ({id, name, cards}) => {
  const cardsIds = Object.keys(cards)
  const wrapCards = cardsIds.map((key, index) => {
    const card = cards[key]
    if (id !== card.column_id) {
      return null
    }
    return (
      <div key={index} >
        {card.name}
      </div>
    )
  })

  return (
    <div>
      <h3>{id} - {name}</h3>
      {wrapCards}
    </div>
  )
}

const BoardIndex = ({board = {}, columns, cards}) => {
  const columnsIds = Object.keys(columns)
  const wrapColumns = columnsIds.map((key, index) => {
    const column = columns[key]
    if (board.id !== column.board_id) {
      return null
    }
    return (
      <Column key={index} cards={cards} {...column} />
    )
  })

  return (
    <div>
      <h2>{board && board.id} - {board && board.name}</h2>
      {wrapColumns}
      <ColumnList boardId={board && board.id} />
    </div>
  )
}


export default BoardIndex
