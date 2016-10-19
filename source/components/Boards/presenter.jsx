
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import * as actions from '../../actions'
import Boards from './index'


@inject('entityStore')
@observer
class BoardsContainer extends Component {
  componentDidMount() {
    actions.fetchEntity('boards')
  }
  render() {
    const {entityStore} = this.props

    return (
      <Boards
        boards={entityStore.getEntitiesByKey('boards')}
      />
    )
  }
}


export default BoardsContainer
