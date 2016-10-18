
import React from 'react'


const BoardsAdd = ({form, handleSubmit}) => (
  <div>
    <h2>Boards Add</h2>
    <form onSubmit={handleSubmit}>
      <input type='text' name={form.$('name').name} onChange={form.$('name').sync} />
      <button>Создать</button>
    </form>
  </div>
)


export default BoardsAdd
