
import React from 'react'

import Column from '../Column'

const ColumnList = ({columns}) => {
  const columnsIds = Object.keys(columns)
  const columnWrap = columnsIds.map((key, index) => (
    <Column key={index} column={columns[key]} />
  ))

  return (
    <div>
      <h2>Column List</h2>
      {columnWrap}
    </div>
  )
}


export default ColumnList
