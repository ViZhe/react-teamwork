
import React from 'react'
import {Link} from 'react-router'

import {Timer} from '../'


const App = ({children}) => (
  <div>
    <h1>App <Link to='/' >home</Link></h1>
    <Timer />
    {children}
  </div>
)


export default App
