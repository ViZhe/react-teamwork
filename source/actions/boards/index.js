
import {arrayOf, normalize} from 'normalizr'

import boardSchema from '../../schemas/board'
import entityStore from '../../stores/entityStore/index'


export const fetchBoards = () => (
  fetch('/api/v1/boards')
    .then(response => response.json())
    .then((data) => {
      const normalizedData = normalize(data, arrayOf(boardSchema))
      entityStore.mergeEntities('boards', normalizedData.entities.boards)
    })
)

export const addBoard = (data) => {
  const id = `id${Math.random()}`
  const board = data
  board.id = id
  console.log(board)

  entityStore.syncEntities('boards', board)
}

export const testBoards = () => {
  console.log('testBoards', Math.random())
}
