class Greeter {
  private date: Date
  private logger: Function
  constructor(date: Date = new Date(), logger: Function = console.log) {
    this.date = date
    this.logger = logger
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
    } else if ((hour >= 22 && hour <= 24) || (hour >= 0 && hour <= 6)) {
      greetingMessage = 'Good night'
    } else {
      greetingMessage = 'Hello'
    }

    const greeting = `${greetingMessage} ${formattedName}.`
    this.logger(greeting)
    return greeting
  }
}

export { Greeter }
