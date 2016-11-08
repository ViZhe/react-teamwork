
import React from 'react'
import {observer} from 'mobx-react'


const SignUp = ({form, handleSubmit}) => (
  <fieldset style={{margin: '10px 0 20px'}}>
    <legend>SignUp</legend>
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
      <button>Sign Up</button>
    </form>
  </fieldset>
)


export default observer(SignUp)
