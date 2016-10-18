
import React from 'react'
import {Route, IndexRoute} from 'react-router'

import {
  App,
  Boards,
  BoardIndex
} from './components'


const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Boards} />
      <Route path='b' >
        <IndexRoute component={Boards} />
        <Route path=':id' component={BoardIndex} />
      </Route>
      <Route path='*' component={Boards} />
    </Route>
  </div>
)


export default routes
