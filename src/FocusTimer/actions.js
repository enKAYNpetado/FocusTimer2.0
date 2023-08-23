import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}

export function addTime() {
  state.minutes += 5
    if (state.minutes > 60) {
      state.minutes = 60
    }
  timer.updateDisplay()
}

export function removeTime() {
  state.minutes -= 5
  if(state.minutes <0) {
    state.minutes = 0
  }
  timer.updateDisplay()
}
