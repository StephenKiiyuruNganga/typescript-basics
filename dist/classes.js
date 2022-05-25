"use strict";
/************* Classes ***************/
/*
this ====> refers to the thing that is responsible for calling a method
access modifiers ====> public,  private, protected(similar to private, in addition, it allows other classes that inherit from the parent to access the property)
read modifiers =====> readonly
*/
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string
        this.members = [];
        // this.name = name
    }
    /*
    add a special argument "this" and set it's transmission to the class so that ts will scream at you
    when you try accessing the method using other objcets that don't match the Department blueprint
    Example below:
    */
    desc() {
        console.log(`Name: ${this.name}\nMembers: ${this.members}\nTotal: ${this.members.length}`);
    }
    add_member(new_member) {
        this.members.push(new_member);
    }
}
class ITDepartment extends Department {
    constructor(id, project = "") {
        super(id, "IT");
        this.project = project;
    }
    set_project(project_name) {
        this.project = project_name;
    }
    desc() {
        super.desc();
        console.log(`Current project: ${this.project}`);
    }
}
const d1 = new Department("d1", "Science");
d1.add_member("Faith");
d1.add_member("Mary");
d1.add_member("Daniel");
d1.desc();
const d2 = new ITDepartment("d2");
d2.add_member("Kiiyuru");
d2.add_member("Chege");
d2.add_member("Collins");
d2.add_member("Grace");
d2.set_project("Transcription Tool");
d2.desc();
/************* Getters and setters ***************/
/*
getters & setters are special propeties of a class that allow you to
define more logic on how to read/update other propeties in that class
*/
class Animal {
    constructor(transmission, habitat) {
        this.transmission = transmission;
        this.habitat = habitat;
    }
    get my_habitat() {
        if (this.habitat) {
            return this.habitat;
        }
        throw new Error("No habitat found");
    }
    set my_habitat(new_habitat) {
        if (!new_habitat) {
            throw new Error("No habitat found");
        }
        this.habitat = new_habitat;
    }
}
const a1 = new Animal("mammal", "water");
console.log(`My habitat ------> ${a1.my_habitat}`);
// a1.my_habitat = ""
/************* Static properties ***************/
/*
"static" keyword is used to create properties and methods that can be accessed
without having to create an instance of a class

it is commonly used in utility classes that have useful properties and methods that
can be used anywhere

"this" inside a static method refers to the class itself
*/
class Learn {
    static get_learning_hrs() {
        // some logic
        return 2 * 20 * 5;
    }
}
Learn.start_data = "01/01/2022";
console.log(`Started learning on ${Learn.start_data}`);
console.log(`I have studied for a total of ${Learn.get_learning_hrs()} hrs`);
/************* Abstract classes ***************/
/*
Used to force classes that inherit from it implement their own version of an inherited method
keyword: "abstract"
You cannot create an instance of an abstract class
*/
class Car {
    constructor(transmission, seats) {
        this.transmission = transmission;
        this.seats = seats;
    }
}
class Offroad extends Car {
    constructor(transmission, seats, has_snorkle) {
        super(transmission, seats);
        this.has_snorkle = has_snorkle;
    }
    show_info() {
        console.log(`OFFROAD!\nTransmission ---> ${this.transmission}\nNumber of seats ---> ${this.seats}\nCan swim ---> ${this.has_snorkle}`);
    }
}
const land_rover = new Offroad("manual", 7, true);
land_rover.show_info();
/************* Singletons & Private constructors ***************/
/*
Singleton is a pattern in OOP that ensures that you only have one instance of a class
You do this by creating a private constructor
*/
class MyGod {
    constructor(name) {
        this.name = name;
    }
    static get_instance() {
        if (MyGod.instance) {
            console.log("Reconnecting...");
            return MyGod.instance;
        }
        else {
            console.log("Establishing a new connection...");
            MyGod.instance = new MyGod("ABBA");
            return MyGod.instance;
        }
    }
}
const God = MyGod.get_instance();
const God_v2 = MyGod.get_instance();
console.log(God, God_v2);
