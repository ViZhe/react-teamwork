
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import * as actions from '../../actions'
import BoardIndex from './index'


@inject('boardsStore')
@observer
class BoardIndexContainer extends Component {
  componentDidMount() {
    actions.fetchBoards()
    this.props.boardsStore.setActive(this.props.params.id)
  }
  render() {
    return (
      <BoardIndex
        {...this.props.boardsStore.entities[this.props.params.id]}
      />
    )
  }
}

export default BoardIndexContainer
