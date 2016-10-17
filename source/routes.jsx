
import React from 'react'
import {Route, IndexRoute} from 'react-router'

import {
  App,
  Boards
} from './components'


const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Boards} />
      <Route path='*' component={Boards} />
    </Route>
  </div>
)


export default routes
