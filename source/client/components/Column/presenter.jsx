
import React from 'react'

import CardList from '../CardList'


const Column = ({id, name, cards}) => (
  <div>
    <div><b>{id}</b> - {name}</div>
    <CardList
      columnId={id}
      cardsIds={cards || []}
    />
  </div>
)


export default Column
