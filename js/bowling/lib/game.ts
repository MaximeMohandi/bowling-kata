import { isSpare, isStrike } from "./rules";

export default class Game {
  #score: number = 0;

  get score() {
    return this.#score;
  }
  //   score(): number {
  //     return this.#score;
  //   }

  roll(pins: number, ...extraPins: number[]): void {
    if (isSpare(pins, ...extraPins)) {
      this.#score = 10 + extraPins[1] * 2;
      return;
    }

    if (isStrike(pins)) {
      this.#score = 10 + (extraPins[0] + extraPins[1]) * 2;
      return;
    }

    this.#score += pins;
    extraPins.forEach((pin) => {
      this.#score += pin;
    });
  }
}
