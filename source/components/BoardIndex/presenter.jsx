
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import * as actions from '../../actions'
import BoardIndex from './index'


@inject('entityStore')
@observer
class BoardIndexContainer extends Component {
  componentDidMount() {
    actions.fetchEntity('boards')
  }
  render() {
    const {entityStore, params: {id}} = this.props

    return (
      <BoardIndex
        board={entityStore.getEntitiesByKey('boards')[id]}
      />
    )
  }
}


export default BoardIndexContainer
