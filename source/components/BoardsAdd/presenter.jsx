
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import Form from 'mobx-react-form'

import * as actions from '../../actions'
import BoardsAdd from './index'


const form = new Form({
  fields: {
    name: ''
  }
})

@observer
class BoardsAddContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = ::this.handleSubmit
  }
  componentDidMount() {
    actions.fetchBoards()
  }
  handleSubmit = (e) => {
    e.preventDefault()
    actions.addBoard(form.values())
    console.log(form.values())
  }
  render() {
    return (
      <BoardsAdd
        form={form}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default BoardsAddContainer
