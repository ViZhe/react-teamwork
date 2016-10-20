
import React from 'react'
import {Route, IndexRoute} from 'react-router'

import {
  App,
  Boards,
  BoardIndex
} from './components'


function requireAsync(name) {
  return (location, next) => {
    require.ensure([], (require) => {
      // eslint-disable-next-line import/no-dynamic-require
      next(null, require(`./components/${name}/index`).default)
    })
  }
}

const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Boards} />
      <Route path='b' >
        <IndexRoute component={Boards} />
        <Route path=':id' component={BoardIndex} />
      </Route>
      <Route path='/timer' getComponent={requireAsync('Timer')} />
      <Route path='*' component={Boards} />
    </Route>
  </div>
)


export default routes
