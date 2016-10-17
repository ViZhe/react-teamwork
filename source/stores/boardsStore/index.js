
import {observable, action} from 'mobx'


class BoardsStore {
  @observable entries = []
  @observable active = null
  @observable isLoading = false
  @observable timer = 1

  @action addOneTimer = () => {
    this.timer += 1
  }

  @action merge = (data) => {
    this.entries = data
  }
}

const boardsStore = new BoardsStore()

export default boardsStore
