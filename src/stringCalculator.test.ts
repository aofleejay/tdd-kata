import { stringCalculator } from './stringCalculator'

it('an empty delimited string returns zero', () => {
  const delimitedString = ''
  const result = stringCalculator.add(delimitedString)

  expect(result).toBe(0)
})

it('a single number returns value', () => {
  const delimitedString = '1'
  const result = stringCalculator.add(delimitedString)

  expect(result).toBe(1)
})

it('two numbers with comma returns sum', () => {
  const delimitedString = '10,20'
  const result = stringCalculator.add(delimitedString)

  expect(result).toBe(30)
})

it('two numbers with newline returns sum', () => {
  const delimitedString = '1\n2'
  const result = stringCalculator.add(delimitedString)

  expect(result).toBe(3)
})

it('three numbers with multiple delimiter returns sum', () => {
  const delimitedString = '2,3\n4,5'
  const result = stringCalculator.add(delimitedString)

  expect(result).toBe(14)
})

it('negative numbers throws error', () => {
  const delimitedString = '-1,2,-3'

  expect(() => {
    stringCalculator.add(delimitedString)
  }).toThrowError('negatives not allowed: -1,-3')
})

it('numbers that greater than 1000 are ignored', () => {
  const delimitedString = '3,5,1000,2,1001'
  const result = stringCalculator.add(delimitedString)

  expect(result).toBe(1010)
})

it('with single delimiter at the beginning of a string', () => {
  const delimitedString = '//#\n5,6#3'
  const result = stringCalculator.add(delimitedString)

  expect(result).toBe(14)
})

it('with multiple delimiter', () => {
  const delimitedString = '//##!\n4##!1,2'
  const result = stringCalculator.add(delimitedString)

  expect(result).toBe(7)
})
