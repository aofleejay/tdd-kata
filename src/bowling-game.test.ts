import { BowlingGame } from './bowling-game'

it('10 frames and each frame got 0 point', () => {
  const bowlingGame = new BowlingGame()

  for (let frame = 0; frame < 10; frame++) {
    bowlingGame.roll(0)
    bowlingGame.roll(0)
  }

  const score = bowlingGame.getScore()
  expect(score).toBe(0)
})

it('10 frames and each frame got 2 point', () => {
  const bowlingGame = new BowlingGame()

  for (let frame = 0; frame < 10; frame++) {
    bowlingGame.roll(1)
    bowlingGame.roll(1)
  }

  const score = bowlingGame.getScore()
  expect(score).toBe(20)
})

it('spare in 1st frame and other frame got 2 point', () => {
  const bowlingGame = new BowlingGame()

  bowlingGame.roll(5)
  bowlingGame.roll(5)
  for (let frame = 0; frame < 9; frame++) {
    bowlingGame.roll(1)
    bowlingGame.roll(1)
  }

  const score = bowlingGame.getScore()
  expect(score).toBe(29)
})

it('first two spare and other frame got 4 point', () => {
  const bowlingGame = new BowlingGame()

  bowlingGame.roll(2)
  bowlingGame.roll(8)
  bowlingGame.roll(2)
  bowlingGame.roll(8)
  for (let frame = 0; frame < 8; frame++) {
    bowlingGame.roll(2)
    bowlingGame.roll(2)
  }

  const score = bowlingGame.getScore()
  expect(score).toBe(56)
})

it('strike in 1st frame and other frame got 3 point', () => {
  const bowlingGame = new BowlingGame()

  bowlingGame.roll(10)
  for (let frame = 0; frame < 9; frame++) {
    bowlingGame.roll(1)
    bowlingGame.roll(2)
  }

  const score = bowlingGame.getScore()
  expect(score).toBe(40)
})

it('first two frame strike and other frame got 4 point', () => {
  const bowlingGame = new BowlingGame()

  bowlingGame.roll(10)
  bowlingGame.roll(10)
  for (let frame = 0; frame < 8; frame++) {
    bowlingGame.roll(2)
    bowlingGame.roll(2)
  }

  const score = bowlingGame.getScore()
  expect(score).toBe(68)
})

it('perfect game', () => {
  const bowlingGame = new BowlingGame()

  for (let frame = 0; frame < 12; frame++) {
    bowlingGame.roll(10)
  }

  const score = bowlingGame.getScore()
  expect(score).toBe(300)
})
