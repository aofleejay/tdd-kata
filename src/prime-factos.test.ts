import { PrimeFactors } from './prime-factors'

it.each`
  target | expectedFactors
  ${1}   | ${[]}
  ${2}   | ${[2]}
  ${3}   | ${[3]}
  ${4}   | ${[2, 2]}
  ${5}   | ${[5]}
  ${6}   | ${[2, 3]}
  ${7}   | ${[7]}
  ${8}   | ${[2, 2, 2]}
`(`$target should returns $expectedFactors`, ({ target, expectedFactors }) => {
  const primeFactors = new PrimeFactors()
  const factors = primeFactors.generate(target)

  expect(factors).toEqual(expectedFactors)
})
