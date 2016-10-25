
import React, {Component} from 'react'
import {
  DragSource as dragSource,
  DropTarget as dropTarget
} from 'react-dnd'

import * as actions from '../../actions'
import Card from './presenter'


const cardTarget = {
  hover(props) {
    console.log(props.card.id)
  },
  drop(props) {
    console.log(props.card.id)
  }
}

const cardSource = {
  beginDrag(props) {
    return {
      id: props.card.id,
      name: props.card.name
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      actions.updateEntity('cards', {
        id: item.id,
        column_id: dropResult.id
      })
    }
  }
}

@dropTarget('card', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@dragSource('card', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
class CardContainer extends Component {
  componentDidMount() {
    console.log('CardContainer')
  }
  render() {
    const {card} = this.props
    const {isDragging, connectDragSource, connectDropTarget} = this.props

    return connectDragSource(connectDropTarget(
      <div style={{display: isDragging && 'none'}} >
        <Card
          {...card}
        />
      </div>
    ))
  }
}


export default CardContainer
