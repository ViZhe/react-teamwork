
import React from 'react'
import {Link} from 'react-router'

import SignIn from '../SignIn'
import SignUp from '../SignUp'


const App = ({children}) => (
  <div>
    <header>
      <h1>App</h1>
      <div><Link to='/' >home</Link></div>
      <div><Link to='/timer' >Lazy load Timer component</Link></div>
      <SignIn />
      <SignUp />
    </header>
    {children}
  </div>
)


export default App
