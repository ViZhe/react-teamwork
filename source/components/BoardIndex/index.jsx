
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {DragDropContext as dragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import * as actions from '../../actions'
import BoardIndex from './presenter'


@dragDropContext(HTML5Backend)
@inject('entityStore')
@observer
class BoardIndexContainer extends Component {
  componentDidMount() {
    actions.fetchEntity()
  }
  render() {
    const {entityStore, params: {id}} = this.props

    return (
      <BoardIndex
        {...entityStore.getEntitiesByKey('boards')[id]}
      />
    )
  }
}


export default BoardIndexContainer
