
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import * as actions from '../../actions'
import Boards from './index'


@inject('boardsStore')
@observer
class BoardsContainer extends Component {
  componentDidMount() {
    actions.fetchBoards()
  }
  handleAddOneTimer = () => {
    actions.upTimer(5)
  }
  handleStartTimer = () => {
    setInterval(() => {
      actions.upTimer()
    }, 1000)
  }
  render() {
    return (
      <Boards
        timer={this.props.boardsStore.timer}
        entities={this.props.boardsStore.entities}
        handleAddOneTimer={this.handleAddOneTimer}
        handleStartTimer={this.handleStartTimer}
      />
    )
  }
}

export default BoardsContainer
