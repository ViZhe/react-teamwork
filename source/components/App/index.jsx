
import React from 'react'
import {Link} from 'react-router'


const App = ({children}) => (
  <div>
    <h1>App <Link to='/' >home</Link></h1>
    {children}
  </div>
)


export default App
