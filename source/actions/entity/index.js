
import {arrayOf, normalize, Schema} from 'normalizr'

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
  const id = `id${Math.random()}`
  const entity = data
  entity.id = id

  entityStore.syncEntities(name, entity)
}

export const updateEntity = (name, data) => {
  entityStore.updateEntities(name, data)
}

export const testEntity = () => {
  console.log('testEntity', Math.random())
}
