
// import entityStore from '../../stores/entityStore'


export const addColumns = (data) => {
  const id = `id${Math.random()}`
  console.log(id, data)
  // columnsStore.merge({
  //   [id]: {
  //     id,
  //     ...data
  //   }
  // })
  // entityStore.syncEntities('columns', {})
}

export const testColumns = () => {
  console.log('testColumns', Math.random())
}
