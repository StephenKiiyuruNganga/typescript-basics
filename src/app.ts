/************* Decorators ***************/

/* 
the idea of having special functions that help other programmers working with your code. Like some sort of tools they can use

symbol -> @

if you add a decorator to a class, it gets the class constructor passed as an argument to it
The decorator gets executed when your class defenition is being registered by javascript, not when an instance of a class is created e.g. in line 41

You can create decorators in 2 ways:
1. as a standard function
2. as a Decorator factory


Decorators can also be added to class properties, setters, getters and methods

Decorators allow you do more setup work when your class is being defined/regiestered
*/

// decorator fn
function Logger(constructor: Function) {
  console.log("Logger fn: Logging...")
  console.log("Logger fn:", constructor)
}

// decorator factory
function Logger_v2(display_string: string) {
  return function (constructor: Function) {
    console.log(display_string)
    console.log("Logger_v2 fn:", constructor)
  }
}

// @Logger
@Logger_v2("I got customized")
class Person {
  name = "Stephen"

  constructor() {
    console.log("Creating a person....")
  }
}

const p1 = new Person()
console.log(p1)

// other places we can add decorators

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator")
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator")
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error("Invalid price - should be positive")
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}
