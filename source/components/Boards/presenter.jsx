
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import Boards from './index'


@inject('boardsStore')
@observer
class BoardsContainer extends Component {
  handleOnClick = () => {
    this.props.boardsStore.addOneTimer()
  }
  render() {
    return (
      <Boards timer={this.props.boardsStore.timer} handleOnClick={this.handleOnClick} />
    )
  }
}

export default BoardsContainer
