
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import * as actions from '../../actions'


@inject('timerStore')
@observer
class BoardsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counters: []
    }
  }
  componentWillUnmount() {
    this.state.counters.forEach(counter => clearInterval(counter))
  }
  handleAddOneTimer = () => {
    actions.upTimer(5)
  }
  handleStartTimer = () => {
    this.state.counters.push(setInterval(() => {
      actions.upTimer()
    }, 1000))
  }
  render() {
    const {timerStore} = this.props
    return (
      <div>
        <h3>timer</h3>
        <div>Seconds passed: {timerStore.timer}</div>
        <button onClick={this.handleAddOneTimer}>
          +5
        </button>
        <button onClick={this.handleStartTimer}>
          Start
        </button>
      </div>
    )
  }
}

export default BoardsContainer
