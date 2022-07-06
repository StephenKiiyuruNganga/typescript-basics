/************* Intersection Types ***************/

/* 
create your own custom types based of any type including union types
create another custom type based on a combination of the above

syntax => &

for objects, the intersection operator (&) builds the intersection as a combination of the 2 or more obejcts. Eg in example1
for union types, the intersection operator builds the types they have in common. Eg in example 2, Universal is of type number
*/

// example 1

type Employee = {
  name: string
  start_date: Date
}

type Admin = {
  name: string
  priviledges: string[]
}

type ElevatedEmployee = Employee & Admin

const e1: ElevatedEmployee = {
  name: "Stephen",
  start_date: new Date(),
  priviledges: ["create-server"],
}

// example 2

type Combinable2 = string | number
type Numeric = number | boolean

type Universal = Combinable2 & Numeric

/************* Type Guards ***************/

/* 
the idea of checking whether a certain property, method exists before using it or if the variable is of a certain type
With type guards you avoid runtime errors by checking types before you try to do something with the values.
*/

// example 1

const add_v5 = (a: Combinable2, b: Combinable2) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }

  return a + b
}

// example 2

type UnknownEmployee = Employee | Admin

const desc_employee = (employee: UnknownEmployee) => {
  console.log(employee.name)

  if ("start_date" in employee) {
    console.log(employee.start_date)
  }

  if ("priviledges" in employee) {
    console.log(employee.priviledges)
  }
}

// example 3

class Saloon {
  drive() {
    console.log("Cruising down the highway....")
  }
}

class Truck {
  drive() {
    console.log("struggling to keep a straight line....")
  }

  load_cargo() {
    console.log("Beba beba....")
  }
}

type Vehicle = Saloon | Truck

const use_vehicle = (v: Vehicle) => {
  v.drive()

  if (v instanceof Truck) {
    v.load_cargo()
  }
}

/************* Discriminated Unions ***************/

/* 
the idea of having a common property in interfaces/classes that we can use to determine which logic to run
*/

interface Bird {
  type: "bird"
  flying_speed: number
}

interface Horse {
  type: "horse"
  running_speed: number
}

type Animal_v2 = Bird | Horse

const get_speed = (animal: Animal_v2) => {
  switch (animal.type) {
    case "bird":
      console.log(`Flying at ${animal.flying_speed} km/hr`)
      break
    case "horse":
      console.log(`Running at ${animal.running_speed} km/hr`)
      break
  }
}

/************* Type casting ***************/

/* 
idea => forecasting

telling typscript which type it should expect in scenarios where it cannot infer. Such a scenario can be accessing something in the DOM

NB:
2 syntaxes for type casting:
<> before the query

"as" keyword after the query

"!" is used to tell typescript that an expression will not yield a null value e.g. when we are sure that we are retrieving an element from the
DOM that we know for sure exists
*/

// const user_input = <HTMLInputElement>document.getElementById("test_input")!
const user_input = document.getElementById("test_input")! as HTMLInputElement

user_input.value = "Hi there"

/************* Index Properties ***************/

/* 
the idea of creating a flexible interface that does not specify the exact property names to be used
*/

interface ErrorContainer {
  [key: string]: string
}

const error_bag: ErrorContainer = {
  email: "Must be a valid email",
  password: "Must contain at least 8 characters",
}

/************* Funtion Overloads ***************/

/* 
the idea of creating different ways of calling the same function e.g having diffenent argument sets
*/

function add_v6(a: number, b: number): number
function add_v6(a: string, b: string): string
function add_v6(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }

  return a + b
}

const my_name = add_v6("Steve", " Kay")
// without the function overload, typescript will infer my_name to be of type Combinable, thus i won't be able to do below:
my_name.split(" ")

/************* Optional chaining & Nullish Coalescing ***************/

/* 
chaining => data?.value

coalescing => the idea of handling null or undefined values with grace
*/

// const userInput = " "
const userInput = null

const stored_data = userInput ?? "DEFAULT"

console.log("stored data", stored_data)
