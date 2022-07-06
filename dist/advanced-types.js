"use strict";
/************* Intersection Types ***************/
const e1 = {
    name: "Stephen",
    start_date: new Date(),
    priviledges: ["create-server"],
};
/************* Type Guards ***************/
/*
the idea of checking whether a certain property, method exists before using it or if the variable is of a certain type
With type guards you avoid runtime errors by checking types before you try to do something with the values.
*/
// example 1
const add_v5 = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
const desc_employee = (employee) => {
    console.log(employee.name);
    if ("start_date" in employee) {
        console.log(employee.start_date);
    }
    if ("priviledges" in employee) {
        console.log(employee.priviledges);
    }
};
// example 3
class Saloon {
    drive() {
        console.log("Cruising down the highway....");
    }
}
class Truck {
    drive() {
        console.log("struggling to keep a straight line....");
    }
    load_cargo() {
        console.log("Beba beba....");
    }
}
const use_vehicle = (v) => {
    v.drive();
    if (v instanceof Truck) {
        v.load_cargo();
    }
};
const get_speed = (animal) => {
    switch (animal.type) {
        case "bird":
            console.log(`Flying at ${animal.flying_speed} km/hr`);
            break;
        case "horse":
            console.log(`Running at ${animal.running_speed} km/hr`);
            break;
    }
};
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
const user_input = document.getElementById("test_input");
user_input.value = "Hi there";
const error_bag = {
    email: "Must be a valid email",
    password: "Must contain at least 8 characters",
};
function add_v6(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const my_name = add_v6("Steve", " Kay");
// without the function overload, typescript will infer my_name to be of type Combinable, thus i won't be able to do below:
my_name.split(" ");
/************* Optional chaining & Nullish Coalescing ***************/
/*
chaining => data?.value

coalescing => the idea of handling null or undefined values with grace
*/
// const userInput = " "
const userInput = null;
const stored_data = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log("stored data", stored_data);
