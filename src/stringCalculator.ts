const isNegativeNumber = (number: number): boolean => {
  return number < 0
}

const covertStringToNumber = (string: string): number => {
  return Number(string)
}

const isUnder = (maxNumber: number) => (number: number): boolean => {
  return number < maxNumber
}

const sum = (numbers: number[]): number => {
  return numbers.reduce((accumulate, number) => (accumulate += number), 0)
}

const stringCalculator = {
  add: (delimitedString: string): number => {
    if (delimitedString === '') {
      return 0
    }

    const delimiters = [',', '\n']
    if (delimitedString.startsWith('//')) {
      const customDelimiterRegex = /\/\/(.*)\n/
      const matches = delimitedString.match(customDelimiterRegex)

      if (matches) {
        const customDelimiter = matches[1]
        delimiters.push(customDelimiter)
      }
    }
    const delimitersRegex = new RegExp(delimiters.join('|'))

    const UPPER_BOUND_NUMBER = 1001
    const numbers = delimitedString
      .split(delimitersRegex)
      .map(covertStringToNumber)
      .filter(isUnder(UPPER_BOUND_NUMBER))
    const negativeNumbers = numbers.filter(isNegativeNumber)

    if (negativeNumbers.length > 0) {
      throw new Error(`negatives not allowed: ${negativeNumbers.join(',')}`)
    }
    return sum(numbers)
  },
}

export { stringCalculator }
