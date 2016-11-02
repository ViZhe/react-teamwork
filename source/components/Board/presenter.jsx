
import React from 'react'
import {Link} from 'react-router'


const Board = ({id, name, position}) => (
  <div>
    {position}) {id} - {name} <Link to={`/b/${id}`} >link</Link>
  </div>
)


export default Board
