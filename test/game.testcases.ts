type TestCase = {
  pinsPerRoll: [number, ...number[]];
  expectedScore: number;
}

const testCases: TestCase[] = [
  {
    pinsPerRoll: [0],
    expectedScore: 0,
  },
  {
    pinsPerRoll: Array(20).fill(0) as TestCase['pinsPerRoll'],
    expectedScore: 0,
  },
  {
    pinsPerRoll: [1],
    expectedScore: 1,
  },
  {
    pinsPerRoll: [1, 1],
    expectedScore: 2,
  },
  {
    pinsPerRoll: [5, 5, 1],
    expectedScore: 12,
  },
  {
    pinsPerRoll: [6, 4, 1],
    expectedScore: 12,
  },
  {
    pinsPerRoll: [6, 4, 2],
    expectedScore: 14,
  },
  {
    pinsPerRoll: [10, 0, 0],
    expectedScore: 10,
  },
  {
    pinsPerRoll: [10, 2, 3],
    expectedScore: 20,
  },
]

export { testCases }
