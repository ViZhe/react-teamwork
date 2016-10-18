
import {arrayOf, normalize} from 'normalizr'

import boardSchema from '../../schemas/board'
import boardsStore from '../../stores/boardsStore/index'


export const fetchBoards = () => (
  fetch('/api/v1/boards')
    .then(response => response.json())
    .then((data) => {
      const normalizedData = normalize(data, arrayOf(boardSchema))
      boardsStore.merge(normalizedData.entities.boards)
    })
)

export const upTimer = (num = 1) => (
  boardsStore.upTimer(num)
)
