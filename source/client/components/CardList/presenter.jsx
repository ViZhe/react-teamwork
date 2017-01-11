
import React from 'react'

import Card from '../Card'
import CardAdd from '../CardAdd'


const CardList = ({cards, columnId}) => {
  const cardWrap = cards.map(card => (
    <Card key={card.id} card={card} />
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
