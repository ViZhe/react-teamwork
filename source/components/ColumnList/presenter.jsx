
import React from 'react'

import Column from '../Column'
import ColumnAdd from '../ColumnAdd'


const ColumnList = ({columns, boardId}) => {
  const columnsIds = Object.keys(columns)
  const columnWrap = columnsIds.map((key, index) => (
    <Column key={index} column={columns[key]} />
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
