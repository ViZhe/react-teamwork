
import {arrayOf, normalize, Schema} from 'normalizr'

import entityStore from '../../stores/entityStore'


export const fetchEntity = (name) => {
  fetch(`/api/v1/${name}`, {
    credentials: 'include'
  })
    .then(response => response.json())
    .then((data) => {
      const normalizedData = normalize(data, arrayOf(new Schema(name)))
      entityStore.mergeEntities(name, normalizedData.entities[name])
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
