interface TestCase {
  expectedScore: number
  pinsPerRoll: [number, ...number[]]
}

const testCases: TestCase[] = [
  {
    expectedScore: 0,
    pinsPerRoll: [0],
  },
  {
    expectedScore: 0,
    pinsPerRoll: Array.from({ length: 20 }).fill(0) as TestCase['pinsPerRoll'],
  },
  {
    expectedScore: 1,
    pinsPerRoll: [1],
  },
  {
    expectedScore: 2,
    pinsPerRoll: [1, 1],
  },
  {
    expectedScore: 12,
    pinsPerRoll: [5, 5, 1],
  },
  {
    expectedScore: 12,
    pinsPerRoll: [6, 4, 1],
  },
  {
    expectedScore: 14,
    pinsPerRoll: [6, 4, 2],
  },
  {
    expectedScore: 10,
    pinsPerRoll: [10, 0, 0],
  },
  {
    expectedScore: 20,
    pinsPerRoll: [10, 2, 3],
  },
]

export { testCases }
