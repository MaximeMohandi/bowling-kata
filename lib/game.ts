import type { PinsPerRoll } from './rules'
import { isSpare, isStrike } from './rules'

export default class Game {
  #score: number = 0

  get score() {
    return this.#score
  }

  roll(...pinsPerRoll: PinsPerRoll): void {
    if (isSpare(...pinsPerRoll)) {
      this.#score = 10 + pinsPerRoll[2] * 2
      return
    }
    if (isStrike(...pinsPerRoll)) {
      this.#score = 10 + (pinsPerRoll[1] + pinsPerRoll[2]) * 2
      return
    }
    pinsPerRoll.forEach((pin) => {
      this.#score += pin
    })
  }
}
