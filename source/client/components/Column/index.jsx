
import React, {Component} from 'react'
import {DropTarget as dropTarget} from 'react-dnd'

import Column from './presenter'


const boxTarget = {
  drop(props) {
    const {id, name} = props.column
    return {
      id,
      name
    }
  }
}

@dropTarget('card', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
class ColumnContainer extends Component {
  componentDidMount() {
    console.log('ColumnContainer')
  }
  render() {
    const {column} = this.props
    const {canDrop, isOver, connectDropTarget} = this.props
    const isActive = canDrop && isOver


    return connectDropTarget(
      <div style={{backgroundColor: isActive && '#efefef'}} >
        <Column
          isActive={isActive}
          {...column}
        />
      </div>
    )
  }
}


export default ColumnContainer
