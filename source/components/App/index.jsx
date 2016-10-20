
import React from 'react'
import {Link} from 'react-router'


const App = ({children}) => (
  <div>
    <h1>App</h1>
    <div><Link to='/' >home</Link></div>
    <div><Link to='/timer' >Lazy load Timer component</Link></div>
    {children}
  </div>
)


export default App
