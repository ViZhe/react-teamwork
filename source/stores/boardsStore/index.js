
import {observable, action} from 'mobx'


class BoardsStore {
  @observable entities = {}
  @observable active = null
  @observable isLoading = true
  @observable timer = 1


  @action upTimer = (num) => {
    this.timer += num
  }

  @action merge = (data) => {
    this.entities = data
    this.isLoading = false
  }

  @action setActive = (id) => {
    this.active = id
  }
}

const boardsStore = new BoardsStore()

export default boardsStore
