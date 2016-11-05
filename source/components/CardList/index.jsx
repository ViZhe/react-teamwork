
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import CardList from './presenter'


@inject('entityStore')
@observer
class CardListContainer extends Component {
  componentDidMount() {
    console.log('CardListContainer')
  }
  render() {
    const {entityStore, columnId, cardsIds} = this.props

    const cardsAll = entityStore.getEntitiesByKey('cards')
    const cards = []

    cardsIds.forEach((id) => {
      cards.push(cardsAll[id])
    })

    return (
      <CardList
        cards={cards}
        columnId={columnId}
      />
    )
  }
}


export default CardListContainer
