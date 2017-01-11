
import React from 'react'

import Board from '../Board'
import BoardAdd from '../BoardAdd'


const BoardList = ({boards}) => {
  const boardWrap = boards.map(board => (
    <Board key={board.id} board={board} />
  ))

  return (
    <fieldset>
      <legend>Board List</legend>
      {boardWrap}
      <BoardAdd />
    </fieldset>
  )
}


export default BoardList
