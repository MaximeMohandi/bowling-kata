import Game from "../lib/game";

describe("Bowling game kata tests", () => {
  describe("Game", () => {
    describe("Frame", () => {
      let game: Game;

      beforeEach(() => {
        game = new Game();
      });

      type TestCase = {
        pins: number;
        extraPins: number[];
        expectedScore: number;
      };

      const cases: TestCase[] = [
        {
          pins: 0,
          extraPins: [],
          expectedScore: 0,
        },
        {
          pins: 0,
          extraPins: Array(19).fill(0),
          expectedScore: 0,
        },
        {
          pins: 1,
          extraPins: [],
          expectedScore: 1,
        },
        {
          pins: 1,
          extraPins: [1],
          expectedScore: 2,
        },
        {
          pins: 5,
          extraPins: [5, 1],
          expectedScore: 12,
        },
        {
          pins: 6,
          extraPins: [4, 1],
          expectedScore: 12,
        },
        {
          pins: 6,
          extraPins: [4, 2],
          expectedScore: 14,
        },
        {
          pins: 10,
          extraPins: [0, 0],
          expectedScore: 10,
        },
        {
          pins: 10,
          extraPins: [2, 3],
          expectedScore: 20,
        },
      ];

      test.each(cases)(
        "should return %s given pins %s extra pins %s",
        ({ pins, extraPins, expectedScore }) => {
          game.roll(pins, ...extraPins);

          expect(game.score).toBe(expectedScore);
        }
      );
    });
  });
});
