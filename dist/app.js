"use strict";
/************* Decorators ***************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
the idea of having special functions that help other programmers working with your code. Like some sort of tools they can use

symbol -> @

if you add a decorator to a class, it gets the class constructor passed as an argument to it
The decorator gets executed when your class is being registered, not when an instance of a class is created e.g. in line 27

You can create decorators in 2 ways:
1. as a standard function
2. as a Decorator factory

*/
// decorator fn
function Logger(constructor) {
    console.log("Logger fn: Logging...");
    console.log("Logger fn:", constructor);
}
// decorator factory
function Logger_v2(display_string) {
    return function (constructor) {
        console.log(display_string);
        console.log("Logger_v2 fn:", constructor);
    };
}
// @Logger
let Person = class Person {
    constructor() {
        this.name = "Stephen";
        console.log("Creating a person....");
    }
};
Person = __decorate([
    Logger_v2("I got customized")
], Person);
const p1 = new Person();
console.log(p1);
