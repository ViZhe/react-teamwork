
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import * as actions from '../../actions'
import BoardList from './presenter'


@inject('entityStore')
@observer
class BoardListContainer extends Component {
  componentDidMount() {
    actions.fetchEntity('boards')
  }
  render() {
    const {entityStore} = this.props

    const boardsAll = entityStore.getEntitiesByKey('boards')
    const boardsIds = Object.keys(boardsAll)
    const boards = {}

    boardsIds.forEach((key) => {
      const board = boardsAll[key]
      boards[board.id] = board
    })

    return (
      <BoardList
        boards={boards}
      />
    )
  }
}


export default BoardListContainer
