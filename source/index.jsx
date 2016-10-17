
import React from 'react'
import ReactDOM from 'react-dom'
import {useStrict} from 'mobx'
import {Provider} from 'mobx-react'
import {Router, browserHistory} from 'react-router'

import * as stores from './stores'
import routes from './routes'


useStrict(true)

ReactDOM.render(
  <Provider {...stores} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
