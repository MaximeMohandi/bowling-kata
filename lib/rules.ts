type PinsPerRoll = [number, ...number[]]

const isStrike = (...pinsPerRoll: PinsPerRoll) => pinsPerRoll[0] === 10

const isSpare = (...pinsPerRoll: PinsPerRoll) => pinsPerRoll[0] !== 10 && (pinsPerRoll[0] + pinsPerRoll[1]) === 10

export type { PinsPerRoll }

export { isStrike, isSpare }

