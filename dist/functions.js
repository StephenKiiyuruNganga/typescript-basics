"use strict";
/************* Union Types ***************/
const combine = (input1, input2) => {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
console.log(combine(2, 2));
console.log(combine("Stephen", "007"));
/************* Literal Types ***************/
// specify specific values for a union type //
const combine_v2 = (input1, input2, mode // =======> Literal type
) => {
    if (typeof input1 === "number" &&
        typeof input2 === "number" &&
        mode === "as-number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
console.log(combine_v2(4, 5, "as-text"));
const combine_v3 = (input1, input2, mode) => {
    if (typeof input1 === "number" &&
        typeof input2 === "number" &&
        mode === "as-number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
/************* Return Types ***************/
// you can specify the return type of a fn. In most cases, typescript will infere this
const combine_v4 = (n1, n2) => {
    return n1 + n2;
};
/************* Function Types ***************/
// You can specify the type of function you want to pass to a variable / callback. I.e. specify the types for each expected argument and the return type
// E.g say we want to call combine_v4 using a variable we create somewhere in our code...
let combine_values;
const say_hello = () => "Hello world";
combine_values = combine_v4;
// combine_values = say_hello
console.log(combine_values(3, 4));
