
import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'

import * as actions from '../../actions'
import CardList from './presenter'


@inject('entityStore')
@observer
class CardListContainer extends Component {
  componentDidMount() {
    actions.fetchEntity('cards')
  }
  render() {
    const {entityStore, columnId} = this.props

    const cardsAll = entityStore.getEntitiesByKey('cards')
    const cardsIds = Object.keys(cardsAll)
    const cards = {}

    cardsIds.forEach((key) => {
      const card = cardsAll[key]
      if (columnId !== card.column_id) {
        return
      }
      cards[card.id] = card
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
