/************* Interfaces ***************/

/*
Interfaces in its simplest form describes how an object should look like
keyword "interface"
We can use interfaces to type check objects

More importantly, interfaces can be used as "contracts" that classes can use and adthere to
This is the main use of interfaces

You can specify that some properties in the interface should be "readonly"

NB:
Interfaces only exist in TS. They are not compiled to JS code. Classes however, are compiled to JS code
Interfaces describe objects (or function types) but can't store/ describe arbitrary types like union types.
*/

interface CanFly {
  speed: number

  fly(distance: number): string
}

interface CanTransport {
  passengers: number

  get_revenue(): number
}

class Aeroplane implements CanFly, CanTransport {
  constructor(
    public type: string,
    public ticket_cost: number = 50,
    // implement the properties of the interfaces:
    public speed: number,
    public passengers: number
  ) {}

  // implement the methods from the interfaces:
  fly(distance: number) {
    return `Flew ${distance} km in ${(distance / this.speed).toFixed(
      0
    )} hours while carrying ${this.passengers} passengers`
  }

  get_revenue() {
    return this.passengers * this.ticket_cost
  }
}

class Bird implements CanFly {
  constructor(public name: string, public speed: number) {}

  fly(distance: number) {
    return `Flew ${distance} km in ${(distance / this.speed).toFixed(0)} hours`
  }
}

const dove = new Bird("dove", 20)
const jet = new Aeroplane("jumbo jet", 300, 885, 660)

console.log(`${dove.name.toUpperCase()}\n${dove.fly(10000)}`)
console.log(
  `${jet.type.toUpperCase()}\n${jet.fly(10000)}\nRevenue: $${jet.get_revenue()}`
)

/*
You can extend interfaces. 
You can also make some interface properties optional by using "?"
*/

interface Named {
  name: string
  nickname?: string

  add_nickname?(): void
}

interface Language {
  lang: string
}

interface Greetable extends Named, Language {
  speak(phrase: string): string
}

// In some cases, interfaces can be used to define function types. Eg:

interface AddFn {
  (a: number, b: number): number
}
