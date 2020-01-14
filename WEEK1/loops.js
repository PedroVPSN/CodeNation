// let favouriteDrink = [
//     "Coke",
//     "Fanta",
//     "Tonica",
//     "Red Bull"
// ]

// for (let i = 0; i < favouriteDrink.length; i++){
//     console.log(favouriteDrink[i])
// }

// let favouriteChoco = [
//     "Mars",
//     "Snickers",
//     "Dairy Milk",
//     "Panic"
// ]

// for (let i = 0; i < favouriteChoco.length; i++){
//     console.log(favouriteChoco[i])
// }

// let favouriteFilm = [
//     "Cars",
//     "Nightmate Before Christmas",
//     "The Irishman",
//     "Batman",
//     "1917"
// ]

// favouriteFilm.push("Avengers", "American Pie")

// console.log(favouriteFilm)

// for (let i = 0; i < favouriteFilm.length; i++){
//     console.log(favouriteFilm[i])
// }

// let cards = ["Diamond", "Spade", "Heart", "Club"]
// let currentCard = "Heart"

// while(currentCard != "Spade") {
//     console.log(currentCard)
//     currentCard = cards[Math.floor(Math.random()*4)]
// }

// console.log(currentCard)

let dayOfWeek = ["mon", "tue", "wed", "thu,","fri"]
let weekend = ["sat", "sun"]
let currentDay = "tue"
let timeOfDay = 0800

while(currentDay != "mon" && timeOfDay >= 0000 && timeOfDay < 0801) {
    currentDay = dayOfWeek[Math.floor(Math.random() * 5)]
    console.log(`The heating is off. Today is ${currentDay}`)
}

// let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
// let currentDay = "Tuesday"

// while(currentDay == "Wednesday" || currentDay == "Thursday" || currentDay == "Wednesday" || currentDay == "thursday" || currentDay == "Friday") {
//     currentDay = dayOfWeek[Math.floor(Math.random() * 7)]
//     console.log(currentDay)
// }


//1.__________________________________________________________________________________________________
// Display 4 films stored in an array

// let filmAvalible = [
//     "A",
//     "B",
//     "C",
//     "D"
// ]
// console.log(filmAvalible)

// //1.__________________________________________________________________________________________________
// // Use a loop to show each film in the array
// for (i = 0; i < filmAvalible.length; i++){
//     console.log(filmAvalible[i])
// }

// const filmCheck = () => {
//     if (filmAvalible[2] == "Ghostbusters"){
//         console.log("yeah")
//     }
//     else {
//         console.log("Booo")
//     }
// }
// filmCheck()
