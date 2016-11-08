
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import * as actions from '../../actions'
import BoardList from './presenter'


@inject('entityStore')
@observer
class BoardListContainer extends Component {
  componentDidMount() {
    actions.fetchEntity()
  }
  render() {
    const {entityStore} = this.props

    const boardsAll = entityStore.getEntitiesByKey('boards')
    const boardsIds = Object.keys(boardsAll)
    const boards = []

    boardsIds.forEach((id) => {
      boards.push(boardsAll[id])
    })

    return (
      <BoardList
        boards={boards}
      />
    )
  }
}


export default BoardListContainer
