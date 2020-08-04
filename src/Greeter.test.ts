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
