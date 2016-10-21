
import React, {Component} from 'react'
import MobxReactForm from 'mobx-react-form'

import * as actions from '../../actions'
import BoardAdd from './presenter'


const form = new MobxReactForm({
  fields: {
    name: ''
  }
})

class BoardAddContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = ::this.handleSubmit
  }
  handleSubmit = (e) => {
    e.preventDefault()
    actions.addEntity('boards', form.values())
    form.clear()
  }
  render() {
    return (
      <BoardAdd
        form={form}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


export default BoardAddContainer
