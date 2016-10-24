
import React from 'react'
import {observer} from 'mobx-react'


const CardAddForm = observer(({form, handleSubmit}) => (
  <fieldset style={{margin: '10px 0 20px'}} >
    <legend>Card Add</legend>
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

const CardAddButton = ({handleClickButton}) => (
  <button onClick={handleClickButton}>Добавить карточку...</button>
)

const CardAdd = ({form, handleSubmit, handleClickButton, isOpened}) => {
  if (isOpened) {
    return (
      <CardAddForm
        form={form}
        handleSubmit={handleSubmit}
      />
    )
  }
  return (
    <CardAddButton
      handleClickButton={handleClickButton}
    />
  )
}


export default CardAdd
