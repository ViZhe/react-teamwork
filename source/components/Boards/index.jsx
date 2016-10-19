
import React from 'react'
import {Link} from 'react-router'

import {BoardsAdd} from '../'


const BoardsItem = ({id, name, position}) => (
  <div>
    {position}) {id} - {name} <Link to={`/b/${id}`} >link</Link>
  </div>
)

const Boards = ({boards}) => {
  const boardsIds = Object.keys(boards)
  const wrapEntries = boardsIds
    .sort((a, b) =>
      boards[a].position - boards[b].position
    )
    .map((id, index) => (
      <BoardsItem key={index} {...boards[id]} />
  ))

  return (
    <div>
      <h2>Boards ({boardsIds.length})</h2>

      {wrapEntries}
      <BoardsAdd />
    </div>
  )
}


export default Boards
