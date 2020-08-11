class PrimeFactors {
  generate(target: number): number[] {
    const factors = []

    for (let divider = 2; divider <= target; divider++) {
      while (target % divider === 0) {
        factors.push(divider)
        target = target / divider
      }
    }
    return factors
  }
}

export { PrimeFactors }
