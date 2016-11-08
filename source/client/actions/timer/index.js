
import timerStore from '../../stores/timerStore'


export const upTimer = (num = 1) => (
  timerStore.upTimer(num)
)

export const upTimerTest = (num = 1) => (
  console.log(num)
)
