
import React, {Component} from 'react'
import MobxReactForm from 'mobx-react-form'

import * as actions from '../../actions'
import CardAdd from './presenter'
import HiddenWrap from '../HiddenWrap'


const form = new MobxReactForm({
  fields: {
    name: ''
  }
})

class CardAddContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = ::this.handleSubmit
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const data = form.values()
    data.column_id = this.props.columnId

    actions.addEntity('cards', data)
    form.clear()
  }
  render() {
    return (
      <HiddenWrap>
        <CardAdd
          form={form}
          handleSubmit={this.handleSubmit}
        />
      </HiddenWrap>
    )
  }
}


export default CardAddContainer
