
import React from 'react'

import ColumnList from '../ColumnList'


const BoardIndex = ({_id, name, owner_id: ownerId}) => {
  console.log('BoardIndex')

  return (
    <div>
      <h2>{_id} - {name} - {ownerId}</h2>
      <ColumnList boardId={_id} />
    </div>
  )
}


export default BoardIndex
