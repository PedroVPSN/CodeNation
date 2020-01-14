// const cinemaTicketPrice = (age) => {
//     console.log(`Your age is: ${age}`)
//     if (age <= 17 ){
//         console.log("You ticket price is £8")
//     }
//     else if (age < 60 ){
//         console.log("You ticket price is £10.95")
//     }
//     else {
//         console.log("You ticket price is £7.50")
//     }
// }

// cinemaTicketPrice(17);
// cinemaTicketPrice(20);
// cinemaTicketPrice(70);

// const coffeeOrder = (size, drinkType) => {
//     if (size == "small" && drinkType == "latte"){
//         console.log(`You price is £5`)
//     }
//     else if (size == "large" && drinkType == "latte"){
//         console.log(`You price is £7`)
//     }
//     else {
//         console.log(`Sorry, sold out`)
//     }
// }

// coffeeOrder("small", "latte")

// const addUpp = (num1, num2) => {
//     return num1 + num2
// }

// addUpp(7,3)
// console.log(addUpp(2,5))

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5)
// }
// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32
// }

// console.log(`The temperature is ${getFahrenheit(15)}F`)

let orderCount = 0

const takeOrder = (topping, topping2) => {
    console.log(`Pizza with ${topping} and ${topping2}.`)
    orderCount++
    console.log(orderCount)
}

takeOrder("pineapple", "sweetcorn")
takeOrder("BBQ", "chicken")

