
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import * as actions from '../../actions'
import BoardIndex from './index'


@inject('entityStore')
@observer
class BoardIndexContainer extends Component {
  componentDidMount() {
    actions.fetchEntity('boards')
    actions.fetchEntity('columns')
  }
  render() {
    const {entityStore, params: {id}} = this.props

    return (
      <BoardIndex
        board={entityStore.getEntitiesByKey('boards')[id]}
        columns={entityStore.getEntitiesByKey('columns')}
      />
    )
  }
}


export default BoardIndexContainer
