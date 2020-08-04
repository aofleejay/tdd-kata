import { Greeter } from './Greeter'

it('say hello when call greet()', () => {
  const greeter = new Greeter()

  const message = greeter.greet('John')

  expect(message).toBe('Hello John.')
})

it('greet() trim input', () => {
  const greeter = new Greeter()

  const message = greeter.greet(' John ')

  expect(message).toBe('Hello John.')
})

it('greet() capitalize name', () => {
  const greeter = new Greeter()

  const message = greeter.greet('john')

  expect(message).toBe('Hello John.')
})

it('greet() say good morning when the time is 6-12AM', () => {
  const morningDateTime = new Date('2020-08-04T23:00:00.000Z')
  const greeter = new Greeter(morningDateTime)

  const message = greeter.greet('john')

  expect(message).toBe('Good morning John.')
})
