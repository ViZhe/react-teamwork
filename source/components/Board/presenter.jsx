
import React from 'react'
import {Link} from 'react-router'


const Board = ({_id, name, position}) => (
  <div>
    {position}) {_id} - {name} <Link to={`/b/${_id}`} >link</Link>
  </div>
)


export default Board
