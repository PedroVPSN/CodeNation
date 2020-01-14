// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(mult(3, 4))

//1.__________________________________________________________________________________________________

let orderCount = 0

const sandwichOrder = (topping1, topping2, topping3, topping4, topping5) => {
    console.log(`Sandwich with ${topping1}, ${topping2}, ${topping3}, ${topping4}, and ${topping5}.`)
    orderCount++
    console.log(orderCount)
}

sandwichOrder("sweetcorn", "tuna", "chicken", "peppers", "beef")
//2.__________________________________________________________________________________________________

let arr = [
    "door",
    "chair",
    "table"
]

arr.unshift("TV")

console.log(arr)

//3.__________________________________________________________________________________________________

for (let i = 0; i < 6; i++) {
    console.log(Math.floor(Math.random() * 49 + 1))
}

//4.__________________________________________________________________________________________________

for (let i = 9; i > -1; i--) {
    console.log(i)
}