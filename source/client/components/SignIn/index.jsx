
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import MobxReactForm from 'mobx-react-form'

import * as actions from '../../actions'
import SignIn from './presenter'


const form = new MobxReactForm({
  fields: {
    email: '',
    password: ''
  }
})

@observer
class SignInContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = ::this.handleSubmit
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const data = form.values()

    actions.signIn(data)
    form.clear()
  }
  render() {
    return (
      <SignIn
        form={form}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


export default SignInContainer
