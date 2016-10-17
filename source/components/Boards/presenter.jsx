
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import Boards from './index'


@inject('boardsStore')
@observer
class BoardsContainer extends Component {
  handleAddOneTimer = () => {
    this.props.boardsStore.addOneTimer()
  }
  handleStartTimer = () => {
    this.props.boardsStore.startTimer()
  }
  render() {
    return (
      <Boards
        timer={this.props.boardsStore.timer}
        handleAddOneTimer={this.handleAddOneTimer}
        handleStartTimer={this.handleStartTimer}
      />
    )
  }
}

export default BoardsContainer
