class BowlingGame {
  rolls: number[] = []

  roll(pins: number): void {
    this.rolls.push(pins)
  }

  getScore(): number {
    let score = 0
    let rollIndex = 0
    const MAX_FRAME = 10

    for (let frame = 0; frame < MAX_FRAME; frame++) {
      if (this.isStriked(rollIndex)) {
        score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
        rollIndex++
      } else if (this.isSpared(rollIndex)) {
        score += 10 + this.rolls[rollIndex + 2]
        rollIndex += 2
      } else {
        score += this.rolls[rollIndex] + this.rolls[rollIndex + 1]
        rollIndex += 2
      }
    }

    return score
  }

  private isSpared(rollIndex: number): boolean {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10
  }

  private isStriked(rollIndex: number): boolean {
    return this.rolls[rollIndex] === 10
  }
}

export { BowlingGame }
