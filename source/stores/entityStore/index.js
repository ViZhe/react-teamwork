
import {observable, action, map} from 'mobx'


class EntityStore {
  @observable entities = map({})

  @action syncEntities = (key, entity) => {
    this.entities.get(key).set(entity.id, entity)
    if (key === 'cards') {
      this.entities
        .get('columns')
        .get(entity.column_id).cards
        .push(entity.id)
    } else if (key === 'columns') {
      this.entities
        .get('boards')
        .get(entity.board_id).columns
        .push(entity.id)
    }
  }

  @action mergeEntities = (key, entities) => {
    if (!this.entities.get(key)) {
      this.entities.set(key, map({}))
    }

    const entitiesKeys = Object.keys(entities)
    entitiesKeys.forEach((entityKey) => {
      this.entities.get(key).set(entityKey, entities[entityKey])
    })
  }

  @action updateEntities = (key, entity) => {
    const data = {
      ...this.entities.get(key).get(entity.id),
      ...entity
    }

    this.entities.get(key).set(entity.id, data)
  }

  getEntitiesByKey(key) {
    const entities = this.entities.get(key)
    return entities ? entities.toJS() : {}
  }
}

const entityStore = new EntityStore()


export default entityStore
