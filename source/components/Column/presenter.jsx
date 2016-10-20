
import React from 'react'

import CardList from '../CardList'


const Column = ({id, name}) => (
  <div>
    <h2>{id} - {name}</h2>
    <CardList columnId={id} />
  </div>
)


export default Column
