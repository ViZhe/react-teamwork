
import React, {Component} from 'react'
import MobxReactForm from 'mobx-react-form'

import * as actions from '../../actions'
import ColumnAdd from './presenter'
import HiddenWrap from '../HiddenWrap'


const form = new MobxReactForm({
  fields: {
    name: ''
  }
})

class ColumnAddContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = ::this.handleSubmit
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const data = form.values()
    data.board_id = this.props.boardId

    actions.addEntity('columns', data)
    form.clear()
  }
  render() {
    return (
      <HiddenWrap>
        <ColumnAdd
          form={form}
          handleSubmit={this.handleSubmit}
        />
      </HiddenWrap>
    )
  }
}


export default ColumnAddContainer
