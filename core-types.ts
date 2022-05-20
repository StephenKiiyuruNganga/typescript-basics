function add(num1: number, num2: number) {
  return num1 + num2
}

const result = add(2, 8.9)

console.log(result)

/************* tuple types ***************/

const person: {
  name: string
  age: number
  hobbies: string[]
  career: [number, string] // =======> tuple: fixed length, fixed types
} = {
  name: "Stephen",
  age: 29,
  hobbies: ["cycling", "traveling"],
  career: [2, "developer"],
}

/************* enum type ***************/

const enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person_v2 = {
  name: "Brian",
  age: 35,
  role: Role.ADMIN,
}
