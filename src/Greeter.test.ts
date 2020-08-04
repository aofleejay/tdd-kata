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

it('greet() say good morning when the time is 06:00-12:00', () => {
  const morningDateTime = new Date('2020-08-04T23:00:00.000Z')
  const greeter = new Greeter(morningDateTime)

  const message = greeter.greet('john')

  expect(message).toBe('Good morning John.')
})

it('greet() say good evening when the time is 18:00-22:00', () => {
  const eveningDateTime = new Date('2020-08-04T11:00:00.000Z')
  const greeter = new Greeter(eveningDateTime)

  const message = greeter.greet('john')

  expect(message).toBe('Good evening John.')
})

it('greet() say good night when the time is 22:00-06:00', () => {
  const nightDateTime = new Date('2020-08-04T15:00:00.000Z')
  const greeter = new Greeter(nightDateTime)

  const message = greeter.greet('john')

  expect(message).toBe('Good night John.')
})
