
import React from 'react'

import ColumnList from '../ColumnList'


const BoardIndex = ({id, name, owner_id: ownerId, columns}) => (
  <div>
    <h2>{id} - {name} - {ownerId}</h2>
    <ColumnList
      boardId={id}
      columnsIds={columns || []}
    />
  </div>
)


export default BoardIndex
