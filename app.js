/************* Union Types ***************/
var combine = function (input1, input2) {
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
var combine_v2 = function (input1, input2, mode) {
    if (typeof input1 === "number" &&
        typeof input2 === "number" &&
        mode === "as-number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
console.log(combine_v2(4, 5, "as-number"));
