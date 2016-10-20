
import React, {Component} from 'react'

import Column from './presenter'


class ColumnContainer extends Component {
  componentDidMount() {
    console.log('ColumnContainer')
  }
  render() {
    const {column} = this.props

    return (
      <Column
        {...column}
      />
    )
  }
}


export default ColumnContainer
