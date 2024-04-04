import Game from '../lib/game'
import { testCases } from './game.testcases'

describe('Bowling Game Kata tests', () => {
  describe('Game', () => {
    describe('Frame', () => {
      let game: Game
      beforeEach(() => {
        game = new Game()
      })
      test.each(testCases)(
        'should return $expectedScore given pins $pinsPerRoll',
        ({ pinsPerRoll, expectedScore }) => {
          // When
          game.roll(...pinsPerRoll)
          // Then
          expect(game.score).toBe(expectedScore)
        },
      )
    })
  })
})
