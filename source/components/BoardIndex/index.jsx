
import React from 'react'


const BoardIndex = ({board, columns}) => {
  const columnsIds = Object.keys(columns)
  const wrapColumns = columnsIds.map((key, index) => {
    const column = columns[key]
    return (
      <div key={index} >
        <h3>{column.id} - {column.name}</h3>
      </div>
    )
  })

  return (
    <div>
      <h2>{board && board.id} - {board && board.name}</h2>
      {wrapColumns}
    </div>
  )
}


export default BoardIndex
