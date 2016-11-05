
import {arrayOf, normalize, Schema} from 'normalizr'

import {checkHttpStatus} from '../../utils'
import entityStore from '../../stores/entityStore'


const cardSchema = new Schema('cards')
const columnSchema = new Schema('columns')
const boardSchema = new Schema('boards')

columnSchema.define({
  cards: arrayOf(cardSchema)
})
boardSchema.define({
  columns: arrayOf(columnSchema)
})

export const fetchEntity = () => {
  fetch('/api/v1/boards', {
    credentials: 'include'
  })
    .then(response => response.json())
    .then((data) => {
      const normalizedData = normalize(data, arrayOf(boardSchema)).entities
      Object.keys(normalizedData).forEach((key) => {
        entityStore.mergeEntities(key, normalizedData[key])
      })
    })
}

export const addEntity = (name, data) => {
  fetch(`/api/v1/${name}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(checkHttpStatus)
    .then(response => response.json())
    .then((json) => {
      entityStore.syncEntities(name, json)
    })
    .catch(console.error)
}

export const updateEntity = (name, data) => {
  entityStore.updateEntities(name, data)
}
