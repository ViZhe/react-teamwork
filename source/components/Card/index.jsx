
import React, {Component} from 'react'

import Card from './presenter'


class CardContainer extends Component {
  componentDidMount() {
    console.log('CardContainer')
  }
  render() {
    const {card} = this.props

    return (
      <Card
        {...card}
      />
    )
  }
}


export default CardContainer
