
import {arrayOf, normalize, Schema} from 'normalizr'

import entityStore from '../../stores/entityStore'


export const fetchEntity = (name) => {
  fetch(`/api/v1/${name}`)
    .then(response => response.json())
    .then((data) => {
      const normalizedData = normalize(data, arrayOf(new Schema(name)))
      entityStore.mergeEntities(name, normalizedData.entities[name])
    })
}

export const testEntity = () => {
  console.log('testEntity', Math.random())
}
