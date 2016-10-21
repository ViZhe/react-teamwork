
import React from 'react'
import {observer} from 'mobx-react'


const BoardAdd = ({form, handleSubmit}) => (
  <fieldset style={{margin: '10px 0 20px'}}>
    <legend>Board Add</legend>
    <form onSubmit={handleSubmit} >
      <input
        type='text'
        name={form.$('name').name}
        value={form.$('name').value}
        placeholder={form.$('name').label}
        onChange={form.$('name').sync}
      />
      <button>Создать</button>
    </form>
  </fieldset>
)


export default observer(BoardAdd)
