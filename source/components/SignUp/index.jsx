
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import MobxReactForm from 'mobx-react-form'

import * as actions from '../../actions'
import SignUp from './presenter'


const form = new MobxReactForm({
  fields: {
    email: '',
    password: ''
  }
})

@observer
class SignUpContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = ::this.handleSubmit
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const data = form.values()

    actions.signUp(data)
    form.clear()
  }
  render() {
    return (
      <SignUp
        form={form}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


export default SignUpContainer
