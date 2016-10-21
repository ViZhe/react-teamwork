
import React from 'react'

import Board from '../Board'
import BoardAdd from '../BoardAdd'


const BoardList = ({boards}) => {
  const boardsIds = Object.keys(boards)
  const boardWrap = boardsIds.map((key, index) => (
    <Board key={index} board={boards[key]} />
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
