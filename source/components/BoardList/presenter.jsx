
import React from 'react'

import Board from '../Board'
import BoardAdd from '../BoardAdd'


const BoardList = ({boards}) => {
  const boardWrap = boards.map((board, index) => (
    <Board key={index} board={board} />
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
