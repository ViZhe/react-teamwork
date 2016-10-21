
import React from 'react'

import CardList from '../CardList'


const Column = ({id, name}) => (
  <div>
    <div><b>{id}</b> - {name}</div>
    <CardList columnId={id} />
  </div>
)


export default Column
