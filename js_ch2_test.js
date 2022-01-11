console.log(6 * 7)

target = 100
yourSales = 300

if (yourSales > 2 * target) {
    performance = 'Excellent'
    bonus = 1000
}else if (yourSales > target) {
    performance = 'Good'
    bonus = 100
} else {
    performance = 'Mediocre'
    bonus = 0
}

console.log(performance)

let x = 10
let y = 5
let max = undefined
if (x>y) max = x; else max = y;
console.log(max)

x = 100
y = 200
max = x > y ? x : y
console.log(max)

let description = ''
switch (x>y) {
    case 0:
        description = 'zero'
        break
    case false:
        description = 'boolean false'
        break
    case true:
        description = 'boolean true'
        break
    case '':
        description = 'empty string'
        break
    default:
        description = 'something else'
}

console.log("Description:", description)

balance = 0
paymentAmount = 100
goal = 1000
interestRate = 5
let years = 0
while (balance < goal) {
    balance += paymentAmount
    let interest = balance * interestRate / 100
    balance += interest
    years++
    console.log('Current balance:', balance, 'Year:', years)
}

console.log(`${years} years.`)

for (let i = 1; i <=10; i++)
    console.log(i)

a = [100, 2, 344, 12]
for (let i = a.length - 1; i >=0; i--)
    console.log(a[i])

for (let i = 0, j = a.length -1; i<j; i++, j--) {
    let temp = a[i]
    a[i]=a[j]
    a[j] = temp
    console.log("Here's a:", a, "i:", i, "j:", j)
}

let greeting = 'hello'
for (const c of greeting)
    console.log(c)

let obj = { name: 'Harry Smith', age: 42, weapon: 'Sword', pet: 'dog' }
for (const key in obj)
    console.log(`${key}: ${obj[key]}`)

let numbers = [1, 2, , 4]
numbers[99] = 100
for (const i in numbers)
    console.log(`${i}: ${numbers[i]}`)

numbers.lucky = true
console.log(numbers)