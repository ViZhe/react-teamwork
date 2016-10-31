
import React from 'react'
import {observer} from 'mobx-react'
import * as actions from '../../actions'

/* eslint-disable */
const SignIn = ({form, handleSubmit}) => (
  <fieldset style={{margin: '10px 0 20px'}}>
    <legend>SignIn</legend>
    <form onSubmit={handleSubmit} >
      <input
        type='text'
        name={form.$('email').name}
        value={form.$('email').value}
        placeholder={form.$('email').label}
        onChange={form.$('email').sync}
        autoFocus
      />
      <input
        type='text'
        name={form.$('password').name}
        value={form.$('password').value}
        placeholder={form.$('password').label}
        onChange={form.$('password').sync}
        autoFocus
      />
      <button>Войти</button>
    </form>
    <div onClick={() => actions.getMe()} >get me</div>
  </fieldset>
)


export default observer(SignIn)
