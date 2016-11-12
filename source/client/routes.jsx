
import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import BoardIndex from './components/BoardIndex'
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
    <Route path='/' component={App} >
      <Route path='/timer' getComponent={requireAsync('Timer')} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)


export default routes
