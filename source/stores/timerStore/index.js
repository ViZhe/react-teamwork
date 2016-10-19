
import {observable, action} from 'mobx'


class TimerStore {
  @observable timer = 0

  @action upTimer = (num) => {
    this.timer += num
  }
}

const timerStore = new TimerStore()


export default timerStore
