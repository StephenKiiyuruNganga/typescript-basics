/************* Union Types ***************/

const combine = (input1: number | string, input2: number | string) => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2
  } else {
    return input1.toString() + input2.toString()
  }
}

console.log(combine(2, 2))
console.log(combine("Stephen", "007"))

/************* Literal Types ***************/

// specify specific values for a union type //

const combine_v2 = (
  input1: number | string,
  input2: number | string,
  mode: "as-number" | "as-text"
) => {
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    mode === "as-number"
  ) {
    return input1 + input2
  } else {
    return input1.toString() + input2.toString()
  }
}

console.log(combine_v2(4, 5, "as-text"))

/************* Type Aliases AKA Custom Types ***************/

type Combinable = number | string
type Mode_specifier = "as-number" | "as-text"

const combine_v3 = (
  input1: Combinable,
  input2: Combinable,
  mode: Mode_specifier
) => {
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    mode === "as-number"
  ) {
    return input1 + input2
  } else {
    return input1.toString() + input2.toString()
  }
}
