
import React from 'react'

import ColumnList from '../ColumnList'


const BoardIndex = ({board = {}}) => {
  console.log('BoardIndex')

  return (
    <div>
      <h2>{board.id} - {board && board.name}</h2>
      <ColumnList boardId={board.id} />
    </div>
  )
}


export default BoardIndex
