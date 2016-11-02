
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

// import * as actions from '../../actions'
import ColumnList from './presenter'


@inject('entityStore')
@observer
class ColumnListContainer extends Component {
  componentDidMount() {
    console.log('ColumnListContainer')
    // actions.fetchEntity('columns')
  }
  render() {
    const {entityStore, boardId} = this.props

    const columnsAll = entityStore.getEntitiesByKey('columns')
    const columnsIds = Object.keys(columnsAll)
    const columns = {}

    columnsIds.forEach((key) => {
      const column = columnsAll[key]
      if (boardId !== column.board_id) {
        return
      }
      columns[column.id] = column
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
