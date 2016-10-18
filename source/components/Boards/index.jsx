
import React from 'react'
import {Link} from 'react-router'


const BoardsItem = ({id, name}) => (
  <div>
    {id}) {name} <Link to={`/b/${id}`} >link</Link>
  </div>
)

const Boards = ({timer, entities, handleAddOneTimer, handleStartTimer}) => {
  const wrapEntries = Object.keys(entities).map((id, index) => (
    <BoardsItem key={index} {...entities[id]} />
  ))

  return (
    <div>
      <h2>Boards</h2>

      {wrapEntries}

      <div>Seconds passed: {timer}</div>
      <button onClick={handleAddOneTimer}>
        +5
      </button>
      <button onClick={handleStartTimer}>
        Start
      </button>
    </div>
  )
}


export default Boards
