
import React from 'react'
import {observer} from 'mobx-react'
import * as actions from '../../actions'


/* eslint-disable jsx-a11y/no-static-element-interactions */
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
    <div onClick={() => actions.signOut()} >sign out</div>
  </fieldset>
)


export default observer(SignIn)
