
import React from 'react'

import ColumnList from '../ColumnList'


const BoardIndex = ({id, name, owner_id: ownerId}) => {
  console.log('BoardIndex')

  return (
    <div>
      <h2>{id} - {name} - {ownerId}</h2>
      <ColumnList boardId={id} />
    </div>
  )
}


export default BoardIndex
