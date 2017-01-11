
import React from 'react'

import Column from '../Column'
import ColumnAdd from '../ColumnAdd'


const ColumnList = ({columns, boardId}) => {
  const columnWrap = columns.map(column => (
    <Column key={column.id} column={column} />
  ))

  return (
    <fieldset>
      <legend>Column List</legend>
      {columnWrap}
      <ColumnAdd boardId={boardId} />
    </fieldset>
  )
}


export default ColumnList
