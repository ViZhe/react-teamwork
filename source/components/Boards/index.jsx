
import React from 'react'


const Boards = ({timer, handleOnClick}) => (
  <div>
    <button onClick={handleOnClick}>
      Seconds passed: {timer}
    </button>
  </div>
)


export default Boards
