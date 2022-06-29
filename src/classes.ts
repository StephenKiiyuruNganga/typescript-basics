/************* Classes ***************/

/* 
this ====> refers to the thing that is responsible for calling a method
access modifiers ====> public,  private, protected(similar to private, in addition, it allows other classes that inherit from the parent to access the property)
read modifiers =====> readonly
*/

class Department {
  // name: string
  private members: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.name = name
  }

  /* 
  add a special argument "this" and set it's transmission to the class so that ts will scream at you 
  when you try accessing the method using other objcets that don't match the Department blueprint
  Example below:
  */
  desc(this: Department) {
    console.log(
      `Name: ${this.name}\nMembers: ${this.members}\nTotal: ${this.members.length}`
    )
  }

  add_member(new_member: string) {
    this.members.push(new_member)
  }
}

class ITDepartment extends Department {
  constructor(id: string, public project: string = "") {
    // call the Parent's constructor and pass the expected arguments i.e. id and name
    super(id, "IT")
  }

  set_project(project_name: string) {
    this.project = project_name
  }

  desc() {
    super.desc()
    console.log(`Current project: ${this.project}`)
  }
}

const d1 = new Department("d1", "Science")

d1.add_member("Faith")
d1.add_member("Mary")
d1.add_member("Daniel")
d1.desc()

const d2 = new ITDepartment("d2")
d2.add_member("Kiiyuru")
d2.add_member("Chege")
d2.add_member("Collins")
d2.add_member("Grace")
d2.set_project("Transcription Tool")
d2.desc()

/************* Getters and setters ***************/

/*
getters & setters are special propeties of a class that allow you to 
define more logic on how to read/update other propeties in that class
*/

class Animal {
  constructor(public taxonomy: string, public habitat: string) {}

  get my_habitat() {
    if (this.habitat) {
      return this.habitat
    }
    throw new Error("No habitat found")
  }

  set my_habitat(new_habitat: string) {
    if (!new_habitat) {
      throw new Error("No habitat found")
    }
    this.habitat = new_habitat
  }
}

const a1 = new Animal("mammal", "water")
console.log(`My habitat ------> ${a1.my_habitat}`)

// a1.my_habitat = ""

/************* Static properties/methods ***************/

/*
"static" keyword is used to create properties and methods that can be accessed
without having to create an instance of a class

it is commonly used in utility classes that have useful properties and methods that
can be used anywhere

"this" inside a static method refers to the class itself
*/

class Learn {
  static start_data: string = "01/01/2022"

  static get_learning_hrs() {
    // some logic
    return 2 * 20 * 5
  }
}

console.log(`Started learning on ${Learn.start_data}`)
console.log(`I have studied for a total of ${Learn.get_learning_hrs()} hrs`)

/************* Abstract classes ***************/

/*
Used to force classes that inherit from it implement their own version of an inherited method
keyword: "abstract"
You cannot create an instance of an abstract class
*/

abstract class Car {
  constructor(protected transmission: string, protected seats: number) {}

  abstract show_info(): void
}

class Offroad extends Car {
  constructor(
    transmission: string,
    seats: number,
    private has_snorkle: boolean
  ) {
    super(transmission, seats)
  }

  show_info() {
    console.log(
      `OFFROAD!\nTransmission ---> ${this.transmission}\nNumber of seats ---> ${this.seats}\nCan swim ---> ${this.has_snorkle}`
    )
  }
}

const land_rover = new Offroad("manual", 7, true)
land_rover.show_info()

/************* Singletons & Private constructors ***************/

/*
Singleton is a pattern in OOP that ensures that you only have one instance of a class
You do this by creating a private constructor
*/

class MyGod {
  private static instance: MyGod
  private constructor(private name: string) {}

  static get_instance() {
    if (MyGod.instance) {
      console.log("Reconnecting...")
      return MyGod.instance
    } else {
      console.log("Establishing a new connection...")
      MyGod.instance = new MyGod("ABBA")
      return MyGod.instance
    }
  }
}

const God = MyGod.get_instance()
const God_v2 = MyGod.get_instance()
console.log(God, God_v2)
