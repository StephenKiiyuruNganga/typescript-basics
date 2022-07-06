"use strict";
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merge_result = merge({ name: "Steve" }, { age: 29 });
console.log(merge_result);
function extractValue(obj, key) {
    return "Value is " + obj[key];
}
extractValue({ age: 29, gender: "male" }, "gender");
// Generic classes
class DataStore {
    constructor() {
        this.store = [];
    }
    addData(item) {
        this.store.push(item);
    }
    removeData(item) {
        this.store.splice(this.store.indexOf(item), 1);
    }
    getData() {
        return [...this.store];
    }
}
const names_store = new DataStore();
names_store.addData("Steve");
names_store.addData("Victoria");
const scores_store = new DataStore();
scores_store.addData(77);
scores_store.addData(34);
function create_vehicle(transmission, seats) {
    // for some reason, we need to add the data like this...therefore:
    let vehicle = {};
    vehicle.transmission = transmission;
    vehicle.seats = seats;
    return vehicle;
}
// ReadOnly<>
let names = ["Steve", "Nash"];
// names.push("Kiiyuru") => not allowed
