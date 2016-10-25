
import React from 'react'
import {Route, IndexRoute} from 'react-router'

import {
  App,
  BoardIndex
} from './components'
import BoardList from './components/BoardList'
import NotFound from './components/NotFound'


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
    <Route path='/' component={App} >
      <IndexRoute component={BoardList} />
      <Route path='b' >
        <IndexRoute component={BoardList} />
        <Route path=':id' component={BoardIndex} />
      </Route>
    </Route>
    <Route path='/timer' getComponent={requireAsync('Timer')} />
    <Route path='*' component={NotFound} />
  </div>
)


export default routes
