
import {observable, action, map} from 'mobx'


class EntityStore {
  @observable entities = map({})
  @observable ids = map({})

  @action syncEntities = (key, entity) => {
    this.entities.get(key).set(entity.id, entity)
    this.ids.get(key).push(entity.id)
  }

  @action setEntities = (entities) => {
    const entitiesKeys = Object.keys(entities)
    entitiesKeys.forEach((entityKey) => {
      this.entities.set(entityKey, map(entities[entityKey]))
    })
  }

  @action mergeEntities = (key, entities) => {
    if (!this.entities.get(key)) {
      this.entities.set(key, map({}))
    }

    const entitiesKeys = Object.keys(entities)
    entitiesKeys.forEach((entityKey) => {
      this.entities.get(key).set(entityKey, entities[entityKey])
    })
    this.ids.set(key, entitiesKeys)
  }

  getEntitiesByKey(key) {
    const entities = this.entities.get(key)
    return entities ? entities.toJS() : {}
  }

  getIdsByKey(key) {
    const ids = this.ids.get(key)
    return ids ? ids.toJS() : []
  }
}

const entityStore = new EntityStore()


export default entityStore
