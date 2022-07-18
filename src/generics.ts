/************* Generic types ***************/

/* 
a type that is connected with another type. That other type is flexible in terms of what specific type it could be

Examples built in to Typescript:
Array types - Array<string> or string[]
Promise types - Promise<string>

The idea of Generics is to store the type information (and hence get better typescript support) for the incoming data from complex classes or functions

You can create generic functions and classes

Often, generic types will be assigned the letter "T". If you have more than one, then the next will be "U" and so on...

You can add constraints to your generic type using the keyword "extends". they can be built in types, custom, union etc
Constraints allow you to narrow down the concrete types that may be used in a generic fn

You can specify a constraint using "keyof" such that the param should be a key that exists in the passed object

NB: 
When can "Generics" come in very handy?
Generics help you create data structures that work together or wrap values of a broad variety of types (e.g. an array that can hold any type of data).
*/

// Generic fn example

// const merge = <T, U> (objA: T, objB: U) => {
//  return Object.assign(objA, objB)
// }

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const merge_result = merge({ name: "Steve" }, { age: 29 })
console.log(merge_result)

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value is " + obj[key]
}

extractValue({ age: 29, gender: "male" }, "gender")

// Generic classes

class DataStore<T extends string | number> {
  private store: T[] = []

  addData(item: T) {
    this.store.push(item)
  }

  removeData(item: T) {
    this.store.splice(this.store.indexOf(item), 1)
  }

  getData() {
    return [...this.store]
  }
}

const names_store = new DataStore<string>()
names_store.addData("Steve")
names_store.addData("Victoria")

const scores_store = new DataStore<number>()
scores_store.addData(77)
scores_store.addData(34)

/************* Other built-in Generic types aka Utility Types ***************/

/*
Docs => https://www.typescriptlang.org/docs/handbook/utility-types.html
*/

// Partial<>

interface Drivable {
  transmission: string
  seats: number
}

function create_vehicle(transmission: string, seats: number): Drivable {
  // for some reason, we need to add the data like this...therefore:
  let vehicle: Partial<Drivable> = {}
  vehicle.transmission = transmission
  vehicle.seats = seats

  return vehicle as Drivable
}

// ReadOnly<>

let names: Readonly<string[]> = ["Steve", "Nash"]
// names.push("Kiiyuru") => not allowed
