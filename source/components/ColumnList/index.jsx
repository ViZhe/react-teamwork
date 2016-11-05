
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import ColumnList from './presenter'


@inject('entityStore')
@observer
class ColumnListContainer extends Component {
  componentDidMount() {
    console.log('ColumnListContainer')
  }
  render() {
    const {entityStore, boardId, columnsIds} = this.props

    const columnsAll = entityStore.getEntitiesByKey('columns')
    const columns = []

    columnsIds.forEach((id) => {
      columns.push(columnsAll[id])
    })

    return (
      <ColumnList
        columns={columns}
        boardId={boardId}
      />
    )
  }
}


export default ColumnListContainer
