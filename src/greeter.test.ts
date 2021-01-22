import { Greeter } from './greeter'

it('say hello when call greet()', () => {
  const spyConsoleLog = jest.fn()
  const dateTime = new Date('2020-08-04T13:00:00.000')
  const greeter = new Greeter(dateTime, spyConsoleLog)

  const message = greeter.greet('John')

  expect(message).toBe('Hello John.')
})

it('greet() trim input', () => {
  const spyConsoleLog = jest.fn()
  const dateTime = new Date('2020-08-04T13:00:00.000')
  const greeter = new Greeter(dateTime, spyConsoleLog)

  const message = greeter.greet(' John ')

  expect(message).toBe('Hello John.')
})

it('greet() capitalize name', () => {
  const spyConsoleLog = jest.fn()
  const dateTime = new Date('2020-08-04T13:00:00.000')
  const greeter = new Greeter(dateTime, spyConsoleLog)

  const message = greeter.greet('john')

  expect(message).toBe('Hello John.')
})

it('greet() say good morning when the time is 06:00-12:00', () => {
  const spyConsoleLog = jest.fn()
  const morningDateTime = new Date('2020-08-04T07:00:00.000')
  const greeter = new Greeter(morningDateTime, spyConsoleLog)

  const message = greeter.greet('john')

  expect(message).toBe('Good morning John.')
})

it('greet() say good evening when the time is 18:00-22:00', () => {
  const spyConsoleLog = jest.fn()
  const eveningDateTime = new Date('2020-08-04T19:00:00.000')
  const greeter = new Greeter(eveningDateTime, spyConsoleLog)

  const message = greeter.greet('john')

  expect(message).toBe('Good evening John.')
})

it('greet() say good night when the time is 22:00-06:00', () => {
  const spyConsoleLog = jest.fn()
  const nightDateTime = new Date('2020-08-04T23:00:00.000')
  const greeter = new Greeter(nightDateTime, spyConsoleLog)

  const message = greeter.greet('john')

  expect(message).toBe('Good night John.')
})

it('log when call greet()', () => {
  const spyConsoleLog = jest.fn()
  const dateTime = new Date('2020-08-04T13:00:00.000')
  const greeter = new Greeter(dateTime, spyConsoleLog)

  greeter.greet('john')

  expect(spyConsoleLog).toHaveBeenCalledTimes(1)
  expect(spyConsoleLog).toHaveBeenCalledWith('Hello John.')
})
