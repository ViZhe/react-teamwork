
import React, {Component} from 'react'

import Board from './presenter'


class BoardContainer extends Component {
  componentDidMount() {
    console.log('BoardContainer')
  }
  render() {
    const {board} = this.props

    return (
      <Board
        {...board}
      />
    )
  }
}


export default BoardContainer
