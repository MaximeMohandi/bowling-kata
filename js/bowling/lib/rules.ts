const isStrike = (pins: number) => pins === 10

const isSpare = (pins: number, ...extraPins: number[]) => pins !== 10 && (pins + extraPins[0]) === 10

export {isStrike, isSpare}
