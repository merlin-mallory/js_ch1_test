let a = 6
let b = 5
console.log(a*b)

// single line comment
/* multi
line
comment
 */

const pi = 3.1415
console.log(pi)
console.log(pi.type)
const notQuitePi = parseFloat(pi)
console.log(notQuitePi, notQuitePi.type)
const notQuitePiString = notQuitePi.toString()
console.log(notQuitePiString, notQuitePiString.type)
const evenLessPiString = (3).toString()
console.log(evenLessPiString)
let hello = 'Hello'.substring(1, 2.5)
console.log(hello)
let hello2 = 'Hello'[2]
console.log(hello2)
const inf_test = 100/0
console.log(inf_test)
let counter = 1
counter++
console.log("counter++:", counter)
let counter2 = 1
++counter2
console.log("++counter:", counter2)

let string_double_agent = "00"
let string_double_agent2 = 7
let string_double_agent3 = string_double_agent + string_double_agent2
console.log("Double agent 1:", string_double_agent, string_double_agent.type, "Double agent 2:",
    string_double_agent2, string_double_agent2.type, "Double agent 3:", string_double_agent3, string_double_agent3.type)

console.log("\"a")

console.log("Hello \u{1F310}")

let destination = 'world'
let firstname = 'Bob'
let lastname = 'Mallory'
let greeting = `Hello, ${firstname.length > 0 ? `${firstname[0]}. ` : '' } ${lastname}`
console.log(greeting)
greeting = `Hello, ${destination.toUpperCase()}!`
console.log(greeting)
greeting = `<div>Hello</div>
<div>${destination}</div>
`
console.log(greeting)

console.log(`\`\$\\`)

const harry = { name: 'Harry Potter', age: 42}
let harrysAge = harry.age
console.log(harrysAge)

harry.age = 100
console.log(harry.age)
harry.salary = '$10,000'
console.log(harry)
delete harry.salary
console.log(harry)
let field = 'Age'
harrysAge = harry[field.toLowerCase()]
console.log('wat', harrysAge)

let numbers = [1, 200, 3000, 'many']
console.log(numbers[3])
numbers[7] =  "numba7"
console.log(numbers)
