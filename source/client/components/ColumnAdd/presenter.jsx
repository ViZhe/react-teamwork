
import React from 'react'
import {observer} from 'mobx-react'


const ColumnAddForm = observer(({form, handleSubmit}) => (
  <fieldset style={{margin: '10px 0 20px'}}>
    <legend>Column Add</legend>
    <form onSubmit={handleSubmit} >
      <input
        type='text'
        name={form.$('name').name}
        value={form.$('name').value}
        placeholder={form.$('name').label}
        onChange={form.$('name').sync}
        autoFocus
      />
      <button>Добавить</button>
    </form>
  </fieldset>
))

const ColumnAddButton = ({handleClickButton}) => (
  <button onClick={handleClickButton}>Добавить столбец</button>
)

const ColumnAdd = ({form, handleSubmit, handleClickButton, isOpened}) => {
  if (isOpened) {
    return (
      <ColumnAddForm
        form={form}
        handleSubmit={handleSubmit}
      />
    )
  }
  return (
    <ColumnAddButton
      handleClickButton={handleClickButton}
    />
  )
}


export default ColumnAdd
