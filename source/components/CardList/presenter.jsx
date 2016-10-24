
import React from 'react'

import Card from '../Card'
import CardAdd from '../CardAdd'


const CardList = ({cards, columnId}) => {
  const cardsIds = Object.keys(cards)
  const cardWrap = cardsIds.map((key, index) => (
    <Card key={index} card={cards[key]} />
  ))

  return (
    <fieldset style={{margin: '10px 0 20px'}} >
      <legend>Card List</legend>
      {cardWrap}
      <CardAdd columnId={columnId} />
    </fieldset>
  )
}


export default CardList
