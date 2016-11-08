
import React from 'react'


const NotFound = ({routeParams: {splat}}) => (
  <div>
    <h1>Not Found</h1>
    <p>Your path: {splat}</p>
  </div>
)


export default NotFound
