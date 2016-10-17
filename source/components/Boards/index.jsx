
import React from 'react'


const Boards = ({timer, handleAddOneTimer, handleStartTimer}) => (
  <div>
    <div>Seconds passed: {timer}</div>
    <button onClick={handleAddOneTimer}>
      + 1
    </button>
    <button onClick={handleStartTimer}>
      Start
    </button>
  </div>
)


export default Boards
