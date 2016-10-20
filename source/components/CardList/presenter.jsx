
import React from 'react'

import Card from '../Card'

const CardList = ({cards}) => {
  const cardsIds = Object.keys(cards)
  const cardWrap = cardsIds.map((key, index) => (
    <Card key={index} card={cards[key]} />
  ))

  return (
    <div>
      <h2>Card List</h2>
      {cardWrap}
    </div>
  )
}


export default CardList
