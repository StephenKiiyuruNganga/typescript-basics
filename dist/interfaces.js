"use strict";
/************* Interfaces ***************/
class Aeroplane {
    constructor(type, ticket_cost = 50, 
    // implement the properties of the interfaces:
    speed, passengers) {
        this.type = type;
        this.ticket_cost = ticket_cost;
        this.speed = speed;
        this.passengers = passengers;
    }
    // implement the methods from the interfaces:
    fly(distance) {
        return `Flew ${distance} km in ${(distance / this.speed).toFixed(0)} hours while carrying ${this.passengers} passengers`;
    }
    get_revenue() {
        return this.passengers * this.ticket_cost;
    }
}
class Bird {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    fly(distance) {
        return `Flew ${distance} km in ${(distance / this.speed).toFixed(0)} hours`;
    }
}
const dove = new Bird("dove", 20);
const jet = new Aeroplane("jumbo jet", 300, 885, 660);
console.log(`${dove.name.toUpperCase()}\n${dove.fly(10000)}`);
console.log(`${jet.type.toUpperCase()}\n${jet.fly(10000)}\nRevenue: $${jet.get_revenue()}`);
