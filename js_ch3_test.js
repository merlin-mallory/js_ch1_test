'use strict'

// function average(x,y) {
//     return (x+y)/2
// }
//
// let result = average(6,7)
// console.log(result)
//
// result = [0, 1, 2, 4].map(Math.sqrt)
// console.log(result)

const multiplyBy5 = x => x * 5
console.log(multiplyBy5(2))

const dieToss = () => Math.trunc(Math.random() * 6) + 1
console.log(dieToss())

setTimeout(() => console.log('Goodbye'), 800)
// The time is 10 seconds, just in milliseconds

const sayLater = (text, when) => {
    let task = () => console.log(text)
    setTimeout(task, when)
}

sayLater('Before', 100)
sayLater('After', 400)

const average = (x, y) => {
    let sum = 0
    let n = 0
    if (Array.isArray(x)) {
        for (const value of x) { sum += value; n++ }
    } else {
        sum = x; n = 1
    }
    if (Array.isArray(y)) {
        for (const value of y) { sum += value; n++ }
    } else {
        sum += y; n++
    }
    return n === 0 ? 0 : sum / n
}

let result1 = average(1, 2)
let result2 = average([1, 2, 3], 4)
let result3 = average(1, [2, 3, 4])
let result4 = average([1, 2], [3, 4, 5])

console.log("1:", result1, "2:", result2, "3:", result3, "4:", result4)

let x = [100, 2]
console.log(typeof(x))

x = 100
let y = 2
const average2 = (x, y) => y === undefined ? x : (x + y) / 2
console.log("Average2:", average2(100))

const average3 = (x, y = x) => (x + y) / 2
console.log("Average3:", average3(100))

// let elem = 0
// let reason = `Element ${elem} not found`
// throw Error(reason)

