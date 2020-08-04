class Greeter {
  private date: Date
  constructor(date: Date = new Date()) {
    this.date = date
  }

  greet(name: string): string {
    const trimName = name.trim()
    const firstChar = trimName[0].toUpperCase()
    const restChar = trimName.slice(1)
    const formattedName = firstChar + restChar

    const hour = this.date.getHours()
    let greetingMessage = ''
    if (hour >= 6 && hour <= 12) {
      greetingMessage = 'Good morning'
    } else if (hour >= 18 && hour < 22) {
      greetingMessage = 'Good evening'
    } else {
      greetingMessage = 'Hello'
    }

    return `${greetingMessage} ${formattedName}.`
  }
}

export { Greeter }
