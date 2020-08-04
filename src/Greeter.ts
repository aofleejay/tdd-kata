class Greeter {
  greet(name: string): string {
    const trimName = name.trim()
    const firstChar = trimName[0].toUpperCase()
    const restChar = trimName.slice(1)
    const formattedName = firstChar + restChar

    return `Hello ${formattedName}.`
  }
}

export { Greeter }
